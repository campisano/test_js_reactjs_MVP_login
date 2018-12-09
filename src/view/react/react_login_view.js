"use strict";

class ReactLoginView extends React.Component // implements LoginView
{
    constructor(_props)
    {
        super(_props);

        this.state = {
            username: null,
            password: null,
            response: null
        };

        this.props.view.getUsername = this.getUsername.bind(this);
        this.props.view.getPassword = this.getPassword.bind(this);
        this.props.view.setActionResponse = this.setActionResponse.bind(this);
    }

    getUsername() {
        return this.state.username;
    }

    getPassword() {
        return this.state.password;
    }

    setActionResponse(_response)
    {
        this.setState({response: _response});
    }

    render()
    {
        return (<div>
                <div>Login:</div>
                <section>
                <form className="area"
                onSubmit={event => this._handleSubmit(event)}>
                <input className="row"
                type="text" placeholder="Username or email"
                value={this.state.username ? this.state.username : ""}
                onChange={event => this._handleUsernameChange(event)} />
                <input className="row"
                type="password" placeholder="Password"
                value={this.state.password ? this.state.password : ""}
                onChange={event => this._handlePasswordChange(event)} />
                <button className="row" type="submit">Login</button>
                <div className="row">
                {this.state.response ? this.state.response : ""}
                </div>
                </form>
                </section>
                </div>
               );
    }

    _handleUsernameChange(_event)
    {
        this.setState({username: _event.target.value});
    }

    _handlePasswordChange(_event)
    {
        this.setState({password: _event.target.value});
    }

    _handleSubmit(_event)
    {
        _event.preventDefault(); // prevent form refreshing on submit
        this.props.view.actionLogin();
    }
}
