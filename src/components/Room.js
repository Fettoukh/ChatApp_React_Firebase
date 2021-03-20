import React from "react";
import { actionTypes } from "../reactContext/reducer";
import { useStateValue } from "../reactContext/StateProvider";
import "./Room.css";

//Modified
function Room({ roomId, roomName }) {
  const [{}, dispatch] = useStateValue();

  return (
    <div
      className="room"
      onClick={() =>
        dispatch({
          type: actionTypes.SET_ROOM,
          room: {
            roomId: roomId,
            roomName: roomName,
          },
        })
      }
    >
      <h4>
        <span className="room_hash">#</span>
        {roomName}
      </h4>
    </div>
  );
}

export default Room;
