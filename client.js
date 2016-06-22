'use strict'
const thrift = require('thrift')
const zookeeper = require('node-zookeeper-client')
const User = require('./idescription/gen-nodejs/UserService')
const UserTypes = require('./idescription/gen-nodejs/user_types')
const Tag = require('./idescription/gen-nodejs/TagService')
const TagType = require('./idescription/gen-nodejs/tag_types')

const transport = thrift.TBufferedTransport()
const protocol = thrift.TBinaryProtocol()

class ServicesPool {
    constructor(options) {
        this.services = []
        this.interface = options.interface
        this.transport = options.transport || thrift.TBufferedTransport()
        this.protocol = options.protocol || thrift.TBinaryProtocol()
    }

    add(addr) {
        this.services.push({
            addr: addr,
            enabled: false,
        })
    }

    generate() {
        for(let i of this.services) {
            const addr = i.addr.split(':')
            i.connection = thrift.createConnection(addr[0], parseInt(addr[1]), {
                transport: this.transport,
                protocol: this.protocol
            })
            i.service = thrift.createClient(this.infc, i.connection)
            i.enabled = true
        }
    }

    get enabledServices() {
        return this.services.filter(s => s.enabled)
    }

    get service() {
        const node = this.services[parseInt(Math.random() * this.services.length)]
        if(node.enabled) {
            return node.service
        } else {
            const services = this.enabledServices
            if(!services.length) {
                console.error('the services all fucking shutdown!')
                process.exit(2)
            } else {
                return services[0]
            }
        }
    }
}

const client = zookeeper.createClient('127.0.0.1:2181')
client.connect()
client.once('connected', () => {
    client.getChildren('/userServer', event => {}, (err, children, stat) => {
        const userPool = new ServicesPool(User)
        for(let i of children) {
            userPool.add(i)
        }
        userPool.generate()
        // children = shuffleArray(children)
        // const serviceAddr = children[0].split(':')
        // //connect to user server
        // const userConn = thrift.createConnection(serviceAddr[0], parseInt(serviceAddr[1]), {
        //     transport, protocol
        // })
        // userConn.on('error', console.error)
        // const userService = thrift.createClient(User, userConn)

        //connect to tag server
        // const tagConn = thrift.createConnection('localhost', 9999, {
        //     transport, protocol
        // })
        // tagConn.on('error', console.error)
        // const tagService = thrift.createClient(Tag, tagConn)

        //call service getUser
        userPool.service.getUser('popqweuiqwie13123')
            .then(user => {
                console.log('Got a user')
                console.log(user)
                console.log('======================')
            })

        //call resetPassword
        userPool.service.resetPassword('popqweuiqwie13123', 'oioqwe')
            .then(ret => {
                console.log('reset password')
                console.log(err || ret)
                console.log('======================')
            })

        //call updateUser need generate a User struct, this is update user's status
        const user = new UserTypes.User
        user.status = UserTypes.Status.unactivated
        userPool.service.updateUser('popqweuiqwie13123', user)
            .then(ret => {
                console.log('update user')
                console.log(err || ret)
                console.log('======================')
            })

        userPool.service.isAuthenticated('123123asdads')
            .then(ret => {
                console.log(ret && 'Authenticated' || 'Unauthenticated')
                console.log('======================')
            })

        const right = 'edit'
        const id = 'popqweuiqwie13123'
        userPool.service.getUser(id, (err, user) => {
            userPool.service.hasRight(id, right, (err, ret) => {
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