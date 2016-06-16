# 用Node.js,Thrift搭建Videojj微服务

#### 安装thrift
官网[https://thrift.apache.org](https://thrift.apache.org)上的安装方法要求编译依赖过多在mac上是个大坑，直接用brew安装就好
```
brew update
brew install thrift
```
Node.js安装就直接
```
npm install thrift --save
```
就好。

#### 运行这个sample
sample用假数据演示了我们videojj项目的基本业务逻辑
- 获取用户信息
- 认证过滤
- 权限审核
- 如果有要限则最后保存tag

为图方便server.js运行了tag和user两个service，实际项目中必然分开。

运行sample
```
git clone https://github.com/alanyang/microservice.git
npm install
npm start // start service
npm run client // run client on other terminal
```


#### thrift interface description(id)文件
在idescription文件夹下，可以把./idescription/gen-nodejs删除。然后用安装好的thrift重新生成
```
thrift -r --gen js:node user.thrift  //user.thrift包含了auth.thrift依赖，故要加-r
thrift --gen js:node tag.thrift
```
这样thrift就会根据interface description文件自动生成js文件。通常情况下，一个thrift文件会生成两个js文件，一个对应的service,一个对应着类型定义。(如user.thrift会生成user_types.js和UserService.js)。thrift通过id文件实现了多语言的远程调，id文件定义了服务接口和数据类型，然后通过thrift命令随意转换为任何开发语言对应的代码。比如如果想用go重新写tag service只需要
```
thrift --gen go tag.thrift 
```
就可以生成go代码，然后再实现id文件定义的接口即可。


#### id文件定义
id语法是类C语言的一种语法，大可把他看成是C语言的头文件。捡重点说。
id基本类型对应的js类型

**基本类型**
byte,double,i16,i32都对应Number,string就对应String。
数据类尽量用小的，这样能减少网络传输。
具体到业务，最多出现的是hidden = 0, show = 1之类，最佳实践是用enum定义，这样网络传输只会占8个bit。如tag.thrift里的
```
enum AuditStatus {
    checking = 0
    published = 1
    rejected = 2
    deleted = 3
}
```

**nested类型**
这在js，python这类动态语言里很方便，但thrift还要让静态语言可用，所以略麻烦，比如
```
{
    title: string,
    cat: Number,
    hidden: Number,
    dot_user: { // 用户点的点
        x:Number,
        x: Number,
        y: Number,
        time: Number,
        duration: Number,
        width: Number,
        height: Number,
        showTitle: Number
    }
}
```
需定义为
```
enum Hidden {
    yes = 1
    no  = 0
}
struct DotUser {
    1:i16 startDt
    2:double x
    3:double y
    4:double time
    5:double duration
    6:double width
    7:double height
    8:byte showTitle
}
struct Tag {
    1:string title
    2:i16    cat
    3:Hidden hidden     //这里用enum
    4:DotUser dot_user //这里是nested对象
}
```


**服务接口定义**
基本语法示例
```
//见idescription/user.thrift
service UserService extends auth.AuthService {
    User getUser(1:string id)
    bool resetPassword(1:string id, 2:string oldPassword) throws (1:UserException error)
    bool sendResetPasswordMail(1:string email)
    bool updateUser(1:string id, 2:User data) throws (1:UserException error)
    bool registerUser(1:User user) throws (1:UserException error)
    bool activateUser(1:string id) throws (1:UserException error)
}
```
id定义是静态类型的，所以方法和参数都需要加入类型，由于还在打包成binary网络传输，还要加上index mark于是就出现了这种奇葩的定义```1:string id```


>有了定义的类型和服务接口，就可以写js服务了。


#### Node.js thrift服务逻辑的Coding
通过thrift命令生成了对应的js文件在，gen-nodejs下。引入之，然后就可以写代码了。示例见server.js
```
'use strict'

const thrift = require('thrift')
const User = require('./idescription/gen-nodejs/UserService')
const UserType = require('./idescription/gen-nodejs/user_types')

const userServer = thrift.createServer(User, {
    getUser(id, result) {
        //replace to mongo findone
        let _user = getUser(id)
        //suppose io time mongodb find use time 100ms
        setTimeout(()=>{
            let user = new UserType.User
            result(null, Object.assign(user, _user))
        }, 100)
    },

    resetPassword(id, old, result) {
        const _user = getUser(id)
        if(!_user || _user.password != old) {
            const error = new UserType.UserException
            error.errorCode = errorsUnmatchOldPassword
            error.reason = 'invalid user or unmatch old password'
            result(error, false)
        } else {
            //update user password in db
            result(null, true)
        }
    }
})

userServer.listen(9999)
```
**so easy.**可见对应id服务接口是一样的,就多了一个参数result用以返回值，result是一个函数，接受两个参数，1为错误对像，2为调用结果。


#### Node.js 客户端Coding
代码在client.js里，大体如下
```
'use strict'
const thrift = require('thrift')
const User = require('./idescription/gen-nodejs/UserService')
const UserTypes = require('./idescription/gen-nodejs/user_types')
const Tag = require('./idescription/gen-nodejs/TagService')
const TagType = require('./idescription/gen-nodejs/tag_types')


const transport = thrift.TBufferedTransport()
const protocol  = thrift.TBinaryProtocol()

//connect to user server
const userConn = thrift.createConnection('localhost', 9090, {transport, protocol})
userConn.on('error', console.error)
const userService = thrift.createClient(User, userConn)

//connect to tag server
const tagConn = thrift.createConnection('localhost', 9999, {transport, protocol})
tagConn.on('error', console.error)
const tagService = thrift.createClient(Tag, tagConn)


//这是一个认证权限+保存tag的调用
const right = 'edit'
const id = 'popqweuiqwie13123'
userService.getUser(id, (err, user) => {
    userService.hasRight(id, right, (err, ret) => {
        console.log(ret && `${user.email} has ${right} right` || `reject ${right} right`)
        if(ret) {
            //has edit right
            tagService.saveTag(212.23, 78.12, (new Date).getTime(), 'my tag', '123askdjkh', (err, ret) => {
                console.log('has right, edit tag begin')
                console.log(ret && 'save tag done')
                console.log('======================') 
            })
        }
        console.log('======================')
    })
})
```
题外话，thrift中transport和protocol分为N种，具体可以看官网介绍。除去像json protocol这种方便调度的模式外，各有优劣，可以一一试之。
IO模型一样分4种，但在Node.js中最爽的一点就是他TM默认就是性能最好的noblock，且只支持这一种io模式。速度飞快。


#### 错误（异常）
thrift接口调用是unsafe的，所以可以抛出异常如：
```
bool updateUser(1:string id, 2:User data) throws (1:UserException error)
```
错误定义
```
exception UserException {
    1:i16 errorCode
    2:string reason
}
```
通过thrift命令会自动生成js对象在_types.js里。比如user.thrift中定义的exception会生成在user_types.js中。
Node.js实现中的使用，直接new之，再传入result即可，如
```
const error = new UserTypes.UserException
error.errorCode = 1
error.reason = 'password unmatch'
result(error, false)
```