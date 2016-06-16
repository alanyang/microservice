namespace cpp auth
namespace java auth

enum Roles {
	user  = 0
	admin = 15
	sales = 1
	auditor = 2
	editor  = 4
	tbker   = 8
	tuditorAndEditor = 6
	siteTagEditor = 16
}

enum Rights {
	admin = 7
	view  = 1
	audit = 2
	edit  = 4
	tbk   = 8
	siteTagEdit = 16
}

service AuthService {
	bool isAuthenticated(1:string token)
	bool hasRight(1:string id, 2:string right)
}