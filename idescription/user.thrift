//
include "auth.thrift"

namespace cpp user

//user status
enum Status {
	unactivated = 0
	activated   = 1  //activated but not completed
	completed   = 2
}

struct User {
	1:string email
	2:string role
	3:string hashedPassword
	4:string provider
	5:string salt
	6:Status status
	7:bool   policyAgreed
	8:string activationCode
	9:string username
	10:string phone
	11:double location
	12:string password    //plain text
}


exception UserException {
	1:i16 errorCode
	2:string reason
}

//can be extend
service UserService extends auth.AuthService {
	//
	User getUser(1:string id)

	//
	bool resetPassword(1:string id, 2:string oldPassword) throws (1:UserException error)

	//
	bool sendResetPasswordMail(1:string email)

	//
	bool updateUser(1:string id, 2:User data) throws (1:UserException error)

	//
	bool registerUser(1:User user) throws (1:UserException error)

	//
	bool activateUser(1:string id) throws (1:UserException error)
}