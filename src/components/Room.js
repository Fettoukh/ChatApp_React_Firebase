import React from "react";
import "./Room.css";

function Room({ roomName }) {
  return (
    <div className="room">
      <h4>
        <span className="room_hash">#</span>
        {roomName}
      </h4>
    </div>
  );
}

export default Room;
