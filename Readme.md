# 用Node.js,Thrift搭建微服务

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
- 和最后的保存tag
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




