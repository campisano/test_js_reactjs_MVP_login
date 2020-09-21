"use strict";

import React from "react";
import ReactDOM from "react-dom";

import AppContext from "./model/app_context.js";
import AuthService from "./model/auth_service.js";
import MessageService from "./model/message_service.js";
import ReactAppView from "./view/react/react_app_view.js";

let message_service = new MessageService();
let auth_service = new AuthService();
let app_context = new AppContext(message_service);

ReactDOM.render(
  <ReactAppView ms={message_service} as={auth_service} />,
  document.getElementById("root")
);
