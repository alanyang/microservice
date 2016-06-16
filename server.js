'use strict'

const thrift = require('thrift')
const User = require('./idescription/gen-nodejs/UserService')
const UserType = require('./idescription/gen-nodejs/user_types')
const Tag = require('./idescription/gen-nodejs/TagService')
const TagType = require('./idescription/gen-nodejs/tag_types')

const data = [{
	_id: 'hjahsdjahdjahjsdjll123',
    email: 'ljqwe2@qq.com',
    role: 'user',
    hashedPassword: 'askhd123123',
    provider: '1223',
    salt: '123123',
    status: 2,
    policyAgreed: false,
    activationCode: 'activationCode',
    username: 'ljqwe2',
    phone: '13678123012',
    location: 98621,
    password: 'wwwasd123' //plain text
}, {
	_id: 'popqweuiqwie13123',
    email: 'miracle@gmail.com',
    role: 'admin',
    hashedPassword: 'fuckteamog',
    provider: '982',
    salt: '17812',
    status: 1,
    policyAgreed: true,
    activationCode: 'fuckteamsecret',
    username: 'miracle9000',
    phone: '138781236651',
    location: 4521,
    password: 'oioqwe' //plain text
}]

const errorsUnmatchOldPassword = 1
const errorUserUnexsiting      = 2

//chang for mongodb find
const getUser = (id) => {
	for(let u of data) {
		if(u._id === id) {
			return JSON.parse(JSON.stringify(u))
		}
	}
}

const userServer = thrift.createServer(User, {
    getUser(id, result) {
    	//replace to mongo findone
    	let _user = getUser(id)
		//suppose io time mongodb find use time 100ms
		let user = new UserType.User
		result(null, Object.assign(user, _user))
    },

    resetPassword(id, old, result) {
		const _user = getUser(id)
		setTimeout(()=>{
			if(!_user || _user.password != old) {
				const error = new UserType.UserException
				error.errorCode = errorsUnmatchOldPassword
				error.reason = 'invalid user or unmatch old password'
				result(error, false)
			} else {
				//update user password in db
				result(null, true)
			}
		}, 189)
    },

    sendResetPasswordMail(email, result) {

    },

    updateUser(id, data, result) {
		const _user = getUser(id)
		setTimeout(()=>{
			if(!_user) {
				const error = new UserType.UserException
				error.errorCode = errorUserUnexsiting
				error.reason = 'User unexsiting'
				result(error, false)	
			} else {
				Object.assign(_user, data)
				//update db for _user
				result(null, true)
			}
		})
    },

    registerUser(user, result) {
		
    },

    activateUser(id, result) {
		result(null, true)
    },

	isAuthenticated(token, result) {
		result(null, true)
	},

	hasRight(id, right, result) {
		result(null, !!(parseInt(Math.random()*100)%2))
	}
})

userServer.listen(9090)

const tagServer = thrift.createServer(Tag, {
	saveTag(x, y, time, title, vid, result) {
		result(null, true)
	}
})

tagServer.listen(9999)