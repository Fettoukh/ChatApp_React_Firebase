import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./Chat.css";
import { AddCircle } from "@material-ui/icons";
import { useStateValue } from "../reactContext/StateProvider";
import db from "../firebase";
import firebase from "firebase";

function Chat() {
  const [{ room, user }, dispatch] = useStateValue();
  //Modified
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  //added
  useEffect(() => {
    if (room) {
      db.collection("rooms")
        .doc(room.roomId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [room]);

  //added
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(room.roomId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        {room && (
          <h3>
            <span className="chat_headerHash">#</span>
            {room.roomName}
          </h3>
        )}
      </div>

      {/* Modified */}
      <div className="chat_body">
        {messages.map((message) => (
          <Message
            // timestamp={message.timestamp}
            message={message.message}
            messageUser={message.user}
          />
        ))}
      </div>

      {/* Modified */}
      <div className="chat_input">
        <AddCircle fontSize="large" />
        <form>
          <input
            disabled={!room}
            placeholder={
              room
                ? `Message ${room.roomName}`
                : "Choose a room to start the conversation !"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={sendMessage}
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
