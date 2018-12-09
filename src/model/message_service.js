"use strict";

class MessageService
{
    constructor()
    {
        this.subscriptions = {};
    }

    subscribe(_type, _subscriber) {
        this.subscriptions[_type] = this.subscriptions[_type] || [];
        this.subscriptions[_type].push(_subscriber);
        console.log("Subscriber attached for message[" + _type + "]");
    }

    unsubscribe(_type, _subscriber) {
        if (this.subscriptions[_type]) {
            for (var i = 0; i < this.subscriptions[_type].length; i++) {
                if (this.subscriptions[_type][i] === _subscriber) {
                    this.subscriptions[_type].splice(i, 1);
                    console.log(
                        "Subscriber detached for message[" + _type + "]");
                    break;
                }
            };
        }
    }

    publish(_type, _message)
    {
        if (this.subscriptions[_type]) {
            this.subscriptions[_type].forEach(
                function(subscriber) {
                    if(subscriber.update) {
                        console.log(
                            "Sending message["
                                + JSON.stringify(_message)
                                + "] of type [" + _type + "]");
                        subscriber.update(_type, _message);
                    }
                }
            );
        }
    }
}
