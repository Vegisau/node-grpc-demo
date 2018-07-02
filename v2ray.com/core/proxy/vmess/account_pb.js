/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var v2ray_com_core_common_protocol_headers_pb = require('../../../../v2ray.com/core/common/protocol/headers_pb.js');
goog.exportSymbol('proto.v2ray.core.proxy.vmess.Account', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v2ray.core.proxy.vmess.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v2ray.core.proxy.vmess.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.v2ray.core.proxy.vmess.Account.displayName = 'proto.v2ray.core.proxy.vmess.Account';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.v2ray.core.proxy.vmess.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v2ray.core.proxy.vmess.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v2ray.core.proxy.vmess.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    alterId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    securitySettings: (f = msg.getSecuritySettings()) && v2ray_com_core_common_protocol_headers_pb.SecurityConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v2ray.core.proxy.vmess.Account}
 */
proto.v2ray.core.proxy.vmess.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v2ray.core.proxy.vmess.Account;
  return proto.v2ray.core.proxy.vmess.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v2ray.core.proxy.vmess.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v2ray.core.proxy.vmess.Account}
 */
proto.v2ray.core.proxy.vmess.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAlterId(value);
      break;
    case 3:
      var value = new v2ray_com_core_common_protocol_headers_pb.SecurityConfig;
      reader.readMessage(value,v2ray_com_core_common_protocol_headers_pb.SecurityConfig.deserializeBinaryFromReader);
      msg.setSecuritySettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v2ray.core.proxy.vmess.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v2ray.core.proxy.vmess.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v2ray.core.proxy.vmess.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAlterId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSecuritySettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      v2ray_com_core_common_protocol_headers_pb.SecurityConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.v2ray.core.proxy.vmess.Account.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 alter_id = 2;
 * @return {number}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.getAlterId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.v2ray.core.proxy.vmess.Account.prototype.setAlterId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional v2ray.core.common.protocol.SecurityConfig security_settings = 3;
 * @return {?proto.v2ray.core.common.protocol.SecurityConfig}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.getSecuritySettings = function() {
  return /** @type{?proto.v2ray.core.common.protocol.SecurityConfig} */ (
    jspb.Message.getWrapperField(this, v2ray_com_core_common_protocol_headers_pb.SecurityConfig, 3));
};


/** @param {?proto.v2ray.core.common.protocol.SecurityConfig|undefined} value */
proto.v2ray.core.proxy.vmess.Account.prototype.setSecuritySettings = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.v2ray.core.proxy.vmess.Account.prototype.clearSecuritySettings = function() {
  this.setSecuritySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.v2ray.core.proxy.vmess.Account.prototype.hasSecuritySettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.v2ray.core.proxy.vmess);