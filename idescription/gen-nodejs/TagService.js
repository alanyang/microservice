//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./tag_types');
//HELPER FUNCTIONS AND STRUCTURES

TagService_saveTag_args = function(args) {
  this.x = null;
  this.y = null;
  this.time = null;
  this.title = null;
  this.vid = null;
  if (args) {
    if (args.x !== undefined && args.x !== null) {
      this.x = args.x;
    }
    if (args.y !== undefined && args.y !== null) {
      this.y = args.y;
    }
    if (args.time !== undefined && args.time !== null) {
      this.time = args.time;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.vid !== undefined && args.vid !== null) {
      this.vid = args.vid;
    }
  }
};
TagService_saveTag_args.prototype = {};
TagService_saveTag_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.DOUBLE) {
        this.x = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.y = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.time = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.vid = input.readString();
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

TagService_saveTag_args.prototype.write = function(output) {
  output.writeStructBegin('TagService_saveTag_args');
  if (this.x !== null && this.x !== undefined) {
    output.writeFieldBegin('x', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.y);
    output.writeFieldEnd();
  }
  if (this.time !== null && this.time !== undefined) {
    output.writeFieldBegin('time', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.time);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 4);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.vid !== null && this.vid !== undefined) {
    output.writeFieldBegin('vid', Thrift.Type.STRING, 5);
    output.writeString(this.vid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TagService_saveTag_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
TagService_saveTag_result.prototype = {};
TagService_saveTag_result.prototype.read = function(input) {
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

TagService_saveTag_result.prototype.write = function(output) {
  output.writeStructBegin('TagService_saveTag_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TagServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
TagServiceClient.prototype = {};
TagServiceClient.prototype.seqid = function() { return this._seqid; }
TagServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
TagServiceClient.prototype.saveTag = function(x, y, time, title, vid, callback) {
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
    this.send_saveTag(x, y, time, title, vid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_saveTag(x, y, time, title, vid);
  }
};

TagServiceClient.prototype.send_saveTag = function(x, y, time, title, vid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('saveTag', Thrift.MessageType.CALL, this.seqid());
  var args = new TagService_saveTag_args();
  args.x = x;
  args.y = y;
  args.time = time;
  args.title = title;
  args.vid = vid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TagServiceClient.prototype.recv_saveTag = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TagService_saveTag_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('saveTag failed: unknown result');
};
TagServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
TagServiceProcessor.prototype.process = function(input, output) {
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

TagServiceProcessor.prototype.process_saveTag = function(seqid, input, output) {
  var args = new TagService_saveTag_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.saveTag.length === 5) {
    Q.fcall(this._handler.saveTag, args.x, args.y, args.time, args.title, args.vid)
      .then(function(result) {
        var result = new TagService_saveTag_result({success: result});
        output.writeMessageBegin("saveTag", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("saveTag", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.saveTag(args.x, args.y, args.time, args.title, args.vid, function (err, result) {
      if (err == null) {
        var result = new TagService_saveTag_result((err != null ? err : {success: result}));
        output.writeMessageBegin("saveTag", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("saveTag", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

