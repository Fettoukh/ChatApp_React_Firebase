import { Avatar } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../reactContext/StateProvider";
import "./Message.css";
// Modified
function Message({ timestamp, message, messageUser }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <div
        className={`message ${
          user.displayName === messageUser.displayName ? "myMessage" : ""
        } `}
      >
        <Avatar src={messageUser.photo} />
        <div className="message_info">
          <h4>
            {messageUser.displayName}{" "}
            <span className="message_infoTimestamp">
              {/* {new Date(timestamp?.toDate()).toUTCString()} */}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
