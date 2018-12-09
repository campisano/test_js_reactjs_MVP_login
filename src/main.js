"use strict";

let message_service = new MessageService();
let auth_service = new AuthService();
let app_context = new AppContext(message_service);

ReactDOM.render(<ReactAppView
                ms={message_service} as={auth_service} />,
                document.getElementById("root")
               );
