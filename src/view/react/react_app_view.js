"use strict";

import React from "react";

import LoginView from "../login_view.js";
import LoginPresenter from "../../presenter/login_presenter.js";
import ReactLoginView from "./react_login_view.js";

export default class ReactAppView extends React.Component {
  constructor(_props) {
    super(_props);

    this.state = {
      username: null,
    };

    this.message_service = this.props.ms;
    this.auth_service = this.props.as;

    this.message_service.subscribe("USER_AUTH", this);
  }

  update(_type, _message) {
    if (_type == "USER_AUTH") {
      this.setState({
        username: _message.username,
      });
    }
  }

  render() {
    if (!this.state.username) {
      let login_view = new LoginView();
      let login_presenter = new LoginPresenter(
        login_view,
        this.auth_service,
        this.message_service
      );
      let react_login_view = <ReactLoginView view={login_view} />;

      return react_login_view;
    } else {
      let welcome_view = <div>Welcome {this.state.username}!</div>;

      return welcome_view;
    }
  }
}
