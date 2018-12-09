"use strict";

class AuthService
{
    login(_username, _password, _on_login)
    {
        if(_username == "abcd" && _password == "1234")
        {
            _on_login({
                success: true,
                token: "q3rt1",
                error: null,
            })
        }
        else
        {
            _on_login({
                success: false,
                token: null,
                error: "Invalid username or password",
            });
        }
    }
}
