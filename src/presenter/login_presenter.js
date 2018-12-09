"use strict";

class LoginPresenter
{
    constructor(_view, _auth_service, _message_service)
    {
        this.view = _view;
        this.view.actionLogin = this.actionLogin.bind(this);

        this.auth_service = _auth_service;
        this.message_service = _message_service;
    }

    actionLogin()
    {
        let login = this.auth_service.login(
            this.view.getUsername(),
            this.view.getPassword(),
            this.onLogin.bind(this));
    }

    onLogin(_result)
    {
        if(_result.success)
        {
            this.view.setActionResponse("Logged in.");
            this.message_service.publish(
                "USER_AUTH", {
                    "username": this.view.getUsername(),
                    "token": _result.token
                }
            );
        }
        else
        {
            this.view.setActionResponse(_result.error);
        }
    }
}
