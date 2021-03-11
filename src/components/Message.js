import React from "react";
import "./Message.css";

function Message({ message, user }) {
  return (
    <div>
      <div className="message">
        <div className="message_info">
          <h4>
            {user}
            <span className="message_infoTimestamp">3/11/2021 - 3:24</span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
