namespace java tag

enum Hidden {
	yes = 1
	no  = 0
}

enum AutoHidden {
	show = 1
	hidden = 0
}

enum Status {
	no = 0
	adding = 1
	added = 2
}

enum Type {
	track = 0
	notrack = 1
	other = 2
}

enum AuditStatus {
	checking = 0
	published = 1
	rejected = 2
	deleted = 3
}

struct AuditInfo {
	1:string currentAuditor
	2:string auditor
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
	3:Hidden hidden
	4:AutoHidden auth_hidden
	5:string user
	6:Status status
	7:Type   type
	8:AuditInfo auditInfo
	9:AuditStatus auditStatus
	10:DotUser dot_user
	11:string vid
}


service TagService {
	bool saveTag(1:double x, 2:double y, 3:double time, 4:string title, 5:string vid)
}
