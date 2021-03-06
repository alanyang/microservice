//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var auth_ttypes = require('./auth_types')


var AuthService = require('./AuthService')
var AuthServiceClient = AuthService.Client
var AuthServiceProcessor = AuthService.Processor
var ttypes = require('./user_types');
//HELPER FUNCTIONS AND STRUCTURES

UserService_getUser_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
UserService_getUser_args.prototype = {};
UserService_getUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_getUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_getUser_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_getUser_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.User(args.success);
    }
  }
};
UserService_getUser_result.prototype = {};
UserService_getUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_getUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_getUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_resetPassword_args = function(args) {
  this.id = null;
  this.oldPassword = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.oldPassword !== undefined && args.oldPassword !== null) {
      this.oldPassword = args.oldPassword;
    }
  }
};
UserService_resetPassword_args.prototype = {};
UserService_resetPassword_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.oldPassword = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_resetPassword_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_resetPassword_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.oldPassword !== null && this.oldPassword !== undefined) {
    output.writeFieldBegin('oldPassword', Thrift.Type.STRING, 2);
    output.writeString(this.oldPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_resetPassword_result = function(args) {
  this.success = null;
  this.error = null;
  if (args instanceof ttypes.UserException) {
    this.error = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
UserService_resetPassword_result.prototype = {};
UserService_resetPassword_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new ttypes.UserException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_resetPassword_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_resetPassword_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_sendResetPasswordMail_args = function(args) {
  this.email = null;
  if (args) {
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
  }
};
UserService_sendResetPasswordMail_args.prototype = {};
UserService_sendResetPasswordMail_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_sendResetPasswordMail_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_sendResetPasswordMail_args');
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 1);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_sendResetPasswordMail_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
UserService_sendResetPasswordMail_result.prototype = {};
UserService_sendResetPasswordMail_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_sendResetPasswordMail_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_sendResetPasswordMail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_updateUser_args = function(args) {
  this.id = null;
  this.data = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = new ttypes.User(args.data);
    }
  }
};
UserService_updateUser_args.prototype = {};
UserService_updateUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.data = new ttypes.User();
        this.data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_updateUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_updateUser_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 2);
    this.data.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_updateUser_result = function(args) {
  this.success = null;
  this.error = null;
  if (args instanceof ttypes.UserException) {
    this.error = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
UserService_updateUser_result.prototype = {};
UserService_updateUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new ttypes.UserException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_updateUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_updateUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_registerUser_args = function(args) {
  this.user = null;
  if (args) {
    if (args.user !== undefined && args.user !== null) {
      this.user = new ttypes.User(args.user);
    }
  }
};
UserService_registerUser_args.prototype = {};
UserService_registerUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new ttypes.User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_registerUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_registerUser_args');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
    this.user.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_registerUser_result = function(args) {
  this.success = null;
  this.error = null;
  if (args instanceof ttypes.UserException) {
    this.error = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
UserService_registerUser_result.prototype = {};
UserService_registerUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new ttypes.UserException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_registerUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_registerUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_activateUser_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
UserService_activateUser_args.prototype = {};
UserService_activateUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_activateUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_activateUser_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_activateUser_result = function(args) {
  this.success = null;
  this.error = null;
  if (args instanceof ttypes.UserException) {
    this.error = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
UserService_activateUser_result.prototype = {};
UserService_activateUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new ttypes.UserException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_activateUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_activateUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(UserServiceClient, AuthServiceClient);
UserServiceClient.prototype.seqid = function() { return this._seqid; }
UserServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
UserServiceClient.prototype.getUser = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getUser(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUser(id);
  }
};

UserServiceClient.prototype.send_getUser = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUser', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_getUser_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_getUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_getUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUser failed: unknown result');
};
UserServiceClient.prototype.resetPassword = function(id, oldPassword, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_resetPassword(id, oldPassword);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_resetPassword(id, oldPassword);
  }
};

UserServiceClient.prototype.send_resetPassword = function(id, oldPassword) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('resetPassword', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_resetPassword_args();
  args.id = id;
  args.oldPassword = oldPassword;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_resetPassword = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_resetPassword_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('resetPassword failed: unknown result');
};
UserServiceClient.prototype.sendResetPasswordMail = function(email, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_sendResetPasswordMail(email);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendResetPasswordMail(email);
  }
};

UserServiceClient.prototype.send_sendResetPasswordMail = function(email) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendResetPasswordMail', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_sendResetPasswordMail_args();
  args.email = email;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_sendResetPasswordMail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_sendResetPasswordMail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendResetPasswordMail failed: unknown result');
};
UserServiceClient.prototype.updateUser = function(id, data, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateUser(id, data);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateUser(id, data);
  }
};

UserServiceClient.prototype.send_updateUser = function(id, data) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateUser', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_updateUser_args();
  args.id = id;
  args.data = data;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_updateUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_updateUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateUser failed: unknown result');
};
UserServiceClient.prototype.registerUser = function(user, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_registerUser(user);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerUser(user);
  }
};

UserServiceClient.prototype.send_registerUser = function(user) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerUser', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_registerUser_args();
  args.user = user;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_registerUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_registerUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerUser failed: unknown result');
};
UserServiceClient.prototype.activateUser = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_activateUser(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_activateUser(id);
  }
};

UserServiceClient.prototype.send_activateUser = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('activateUser', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_activateUser_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_activateUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_activateUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('activateUser failed: unknown result');
};
UserServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
Thrift.inherits(UserServiceProcessor, AuthServiceProcessor)
UserServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

UserServiceProcessor.prototype.process_getUser = function(seqid, input, output) {
  var args = new UserService_getUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUser.length === 1) {
    Q.fcall(this._handler.getUser, args.id)
      .then(function(result) {
        var result = new UserService_getUser_result({success: result});
        output.writeMessageBegin("getUser", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUser", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUser(args.id, function (err, result) {
      if (err == null) {
        var result = new UserService_getUser_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getUser", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_resetPassword = function(seqid, input, output) {
  var args = new UserService_resetPassword_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.resetPassword.length === 2) {
    Q.fcall(this._handler.resetPassword, args.id, args.oldPassword)
      .then(function(result) {
        var result = new UserService_resetPassword_result({success: result});
        output.writeMessageBegin("resetPassword", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.UserException) {
          var result = new UserService_resetPassword_result(err);
          output.writeMessageBegin("resetPassword", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("resetPassword", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.resetPassword(args.id, args.oldPassword, function (err, result) {
      if (err == null || err instanceof ttypes.UserException) {
        var result = new UserService_resetPassword_result((err != null ? err : {success: result}));
        output.writeMessageBegin("resetPassword", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("resetPassword", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_sendResetPasswordMail = function(seqid, input, output) {
  var args = new UserService_sendResetPasswordMail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendResetPasswordMail.length === 1) {
    Q.fcall(this._handler.sendResetPasswordMail, args.email)
      .then(function(result) {
        var result = new UserService_sendResetPasswordMail_result({success: result});
        output.writeMessageBegin("sendResetPasswordMail", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendResetPasswordMail", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendResetPasswordMail(args.email, function (err, result) {
      if (err == null) {
        var result = new UserService_sendResetPasswordMail_result((err != null ? err : {success: result}));
        output.writeMessageBegin("sendResetPasswordMail", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendResetPasswordMail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_updateUser = function(seqid, input, output) {
  var args = new UserService_updateUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateUser.length === 2) {
    Q.fcall(this._handler.updateUser, args.id, args.data)
      .then(function(result) {
        var result = new UserService_updateUser_result({success: result});
        output.writeMessageBegin("updateUser", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.UserException) {
          var result = new UserService_updateUser_result(err);
          output.writeMessageBegin("updateUser", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateUser", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateUser(args.id, args.data, function (err, result) {
      if (err == null || err instanceof ttypes.UserException) {
        var result = new UserService_updateUser_result((err != null ? err : {success: result}));
        output.writeMessageBegin("updateUser", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_registerUser = function(seqid, input, output) {
  var args = new UserService_registerUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerUser.length === 1) {
    Q.fcall(this._handler.registerUser, args.user)
      .then(function(result) {
        var result = new UserService_registerUser_result({success: result});
        output.writeMessageBegin("registerUser", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.UserException) {
          var result = new UserService_registerUser_result(err);
          output.writeMessageBegin("registerUser", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("registerUser", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerUser(args.user, function (err, result) {
      if (err == null || err instanceof ttypes.UserException) {
        var result = new UserService_registerUser_result((err != null ? err : {success: result}));
        output.writeMessageBegin("registerUser", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registerUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_activateUser = function(seqid, input, output) {
  var args = new UserService_activateUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.activateUser.length === 1) {
    Q.fcall(this._handler.activateUser, args.id)
      .then(function(result) {
        var result = new UserService_activateUser_result({success: result});
        output.writeMessageBegin("activateUser", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.UserException) {
          var result = new UserService_activateUser_result(err);
          output.writeMessageBegin("activateUser", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("activateUser", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.activateUser(args.id, function (err, result) {
      if (err == null || err instanceof ttypes.UserException) {
        var result = new UserService_activateUser_result((err != null ? err : {success: result}));
        output.writeMessageBegin("activateUser", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("activateUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

