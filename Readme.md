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

为图方便server.js运行了tag service和user service

运行sample
```
npm install
npm start // start service
npm run client // run client on other terminal
```


#### thrift interface description(id)文件
文件在idescription下，可以把./idescription/gen-nodejs删除。然后用安装好的thrift重新生成
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
|----ID类型----|----JS类型----|
|----byte-----|-----Number--|
|--i16,i32----|-----Number--|
|----double---|-----Number--|
|----string---|-----String---|
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
id定义是表态类型的，所以方法和参数都需要加入类型，由于还在打包成binary网络传输，还要加上index mark于是就出现了这种奇葩的定义```1:string id```