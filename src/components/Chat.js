import React, { useState } from "react";
import Message from "./Message";
import "./Chat.css";
import { AddCircle } from "@material-ui/icons";

function Chat() {
  const [messages, setMessages] = useState([
    { message: "Hi i'am a message!", user: "Fettoukh" },
    { message: "Hello i'am another message!", user: "Anonyme" },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="chat">
      <div className="chat_header">
        <h3>
          <span className="chat_headerHash">#</span>
          Dev Room
        </h3>
      </div>

      <div className="chat_body">
        {messages.map((message) => (
          <Message message={message.message} user={message.user} />
        ))}
      </div>

      <div className="chat_input">
        <AddCircle fontSize="large" />
        <form>
          <input
            placeholder={"Enter your message ..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => console.log(input)}
            className="chat_inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
