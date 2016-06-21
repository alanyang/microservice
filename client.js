'use strict'
const thrift = require('thrift')
const zookeeper = require('node-zookeeper-client')
const User = require('./idescription/gen-nodejs/UserService')
const UserTypes = require('./idescription/gen-nodejs/user_types')
const Tag = require('./idescription/gen-nodejs/TagService')
const TagType = require('./idescription/gen-nodejs/tag_types')

const transport = thrift.TBufferedTransport()
const protocol = thrift.TBinaryProtocol()

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const client = zookeeper.createClient('127.0.0.1:2181')
client.connect()
client.once('connected', () => {
    client.getChildren('/userServer', event => {}, (err, children, stat) => {
        children = shuffleArray(children)
        const serviceAddr = children[0].split(':')
        //connect to user server
        const userConn = thrift.createConnection(serviceAddr[0], parseInt(serviceAddr[1]), {
            transport, protocol
        })
        userConn.on('error', console.error)
        const userService = thrift.createClient(User, userConn)

        //connect to tag server
        // const tagConn = thrift.createConnection('localhost', 9999, {
        //     transport, protocol
        // })
        // tagConn.on('error', console.error)
        // const tagService = thrift.createClient(Tag, tagConn)

        //call service getUser
        userService.getUser('popqweuiqwie13123')
            .then(user => {
                console.log('Got a user')
                console.log(user)
                console.log('======================')
            })

        //call resetPassword
        userService.resetPassword('popqweuiqwie13123', 'oioqwe')
            .then(ret => {
                console.log('reset password')
                console.log(err || ret)
                console.log('======================')
            })

        //call updateUser need generate a User struct, this is update user's status
        const user = new UserTypes.User
        user.status = UserTypes.Status.unactivated
        userService.updateUser('popqweuiqwie13123', user)
            .then(ret => {
                console.log('update user')
                console.log(err || ret)
                console.log('======================')
            })

        userService.isAuthenticated('123123asdads')
            .then(ret => {
                console.log(ret && 'Authenticated' || 'Unauthenticated')
                console.log('======================')
            })

        const right = 'edit'
        const id = 'popqweuiqwie13123'
        userService.getUser(id, (err, user) => {
            userService.hasRight(id, right, (err, ret) => {
                console.log(ret && `${user.email} has ${right} right` || `reject ${right} right`)
                if (ret) {
                    //has edit right
                    // tagService.saveTag(212.23, 78.12, (new Date)
                    //     .getTime(), 'my tag', '123askdjkh', (err, ret) => {
                    //         console.log('has right, edit tag begin')
                    //         console.log(ret && 'save tag done')
                    //         console.log('======================')
                    //     })
                }
                console.log('======================')
            })
        })
    })
})

// const zk = new Zookeeper({
//     connect: '127.0.0.1:2181',
//     timeout: 12000,
//     debug_level: Zookeeper.ZOO_LOG_LEVEL_WARN,
//     host_order_deterministic: false,
//     data_as_buffer: false
// })

// zk.connect(err => {
//     if(err) {
//         console.error(err)
//         process.exit(2)
//     }
// })

// zk.on(Zookeeper.on_connected, client => {
//     console.log(client)
//     client.a_get('/userServer', true, (r, err, children) => {
//         console.log(r, err, children)
//     })
// })

//===============================