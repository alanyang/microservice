//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./auth_types');
//HELPER FUNCTIONS AND STRUCTURES

AuthService_isAuthenticated_args = function(args) {
  this.token = null;
  if (args) {
    if (args.token !== undefined && args.token !== null) {
      this.token = args.token;
    }
  }
};
AuthService_isAuthenticated_args.prototype = {};
AuthService_isAuthenticated_args.prototype.read = function(input) {
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
        this.token = input.readString();
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

AuthService_isAuthenticated_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_isAuthenticated_args');
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 1);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthService_isAuthenticated_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
AuthService_isAuthenticated_result.prototype = {};
AuthService_isAuthenticated_result.prototype.read = function(input) {
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

AuthService_isAuthenticated_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_isAuthenticated_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthService_hasRight_args = function(args) {
  this.id = null;
  this.right = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.right !== undefined && args.right !== null) {
      this.right = args.right;
    }
  }
};
AuthService_hasRight_args.prototype = {};
AuthService_hasRight_args.prototype.read = function(input) {
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
        this.right = input.readString();
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

AuthService_hasRight_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_hasRight_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.right !== null && this.right !== undefined) {
    output.writeFieldBegin('right', Thrift.Type.STRING, 2);
    output.writeString(this.right);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthService_hasRight_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
AuthService_hasRight_result.prototype = {};
AuthService_hasRight_result.prototype.read = function(input) {
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

AuthService_hasRight_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_hasRight_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
AuthServiceClient.prototype = {};
AuthServiceClient.prototype.seqid = function() { return this._seqid; }
AuthServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
AuthServiceClient.prototype.isAuthenticated = function(token, callback) {
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
    this.send_isAuthenticated(token);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isAuthenticated(token);
  }
};

AuthServiceClient.prototype.send_isAuthenticated = function(token) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isAuthenticated', Thrift.MessageType.CALL, this.seqid());
  var args = new AuthService_isAuthenticated_args();
  args.token = token;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AuthServiceClient.prototype.recv_isAuthenticated = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_isAuthenticated_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isAuthenticated failed: unknown result');
};
AuthServiceClient.prototype.hasRight = function(id, right, callback) {
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
    this.send_hasRight(id, right);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_hasRight(id, right);
  }
};

AuthServiceClient.prototype.send_hasRight = function(id, right) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('hasRight', Thrift.MessageType.CALL, this.seqid());
  var args = new AuthService_hasRight_args();
  args.id = id;
  args.right = right;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AuthServiceClient.prototype.recv_hasRight = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_hasRight_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('hasRight failed: unknown result');
};
AuthServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
AuthServiceProcessor.prototype.process = function(input, output) {
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

AuthServiceProcessor.prototype.process_isAuthenticated = function(seqid, input, output) {
  var args = new AuthService_isAuthenticated_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isAuthenticated.length === 1) {
    Q.fcall(this._handler.isAuthenticated, args.token)
      .then(function(result) {
        var result = new AuthService_isAuthenticated_result({success: result});
        output.writeMessageBegin("isAuthenticated", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isAuthenticated", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.isAuthenticated(args.token, function (err, result) {
      if (err == null) {
        var result = new AuthService_isAuthenticated_result((err != null ? err : {success: result}));
        output.writeMessageBegin("isAuthenticated", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isAuthenticated", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

AuthServiceProcessor.prototype.process_hasRight = function(seqid, input, output) {
  var args = new AuthService_hasRight_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.hasRight.length === 2) {
    Q.fcall(this._handler.hasRight, args.id, args.right)
      .then(function(result) {
        var result = new AuthService_hasRight_result({success: result});
        output.writeMessageBegin("hasRight", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("hasRight", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.hasRight(args.id, args.right, function (err, result) {
      if (err == null) {
        var result = new AuthService_hasRight_result((err != null ? err : {success: result}));
        output.writeMessageBegin("hasRight", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("hasRight", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
