"use strict";

export default class AppContext {
  constructor(_message_service) {
    this.username = null;
    this.token = null;

    _message_service.subscribe("USER_AUTH", this);
  }

  update(_type, _message) {
    console.log(
      "Receiving message[" +
        JSON.stringify(_message) +
        "] of type [" +
        _type +
        "]"
    );

    if (_type == "USER_AUTH") {
      this.username = _message.username;
      this.token = _message.token;
    }
  }
}
