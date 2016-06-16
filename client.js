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


//call service getUser
userService.getUser('popqweuiqwie13123', (err, user)=> {
    console.log('Got a user')
    console.log(user)
    console.log('======================')
})

//call resetPassword
userService.resetPassword('popqweuiqwie13123', 'oioqwe', (err, ret) => {
    console.log('reset password')
    console.log(err || ret)
    console.log('======================')
})

//call updateUser need generate a User struct, this is update user's status
const user = new UserTypes.User
user.status = UserTypes.Status.unactivated
userService.updateUser('popqweuiqwie13123', user, (err, ret) => {
    console.log('update user')
    console.log(err || ret)
    console.log('======================')
})

userService.isAuthenticated('123123asdads', (err, ret) => {
    console.log(ret && 'Authenticated' || 'Unauthenticated')
    console.log('======================')
})

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

//===============================
