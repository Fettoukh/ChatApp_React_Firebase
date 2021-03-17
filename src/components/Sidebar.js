import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, Button } from "@material-ui/core";
import { Add, ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Room from "./Room";
import { actionTypes } from "../reactContext/reducer";
import { useStateValue } from "../reactContext/StateProvider";
import db, { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [rooms, setRooms] = useState([]);
  const [roomToADD, setRoomToADD] = useState("");

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          room: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddRoom = () => {
    if (roomToADD !== "") {
      db.collection("rooms").add({
        roomName: roomToADD,
      });
      setRoomToADD("");
    }
  };

  return (
    <div className="sidebar">
      {/* Profil */}
      <div className="sidebar_profil">
        <Avatar src={user.photo} className={useStyles().large} />
        <h3>{user.displayName}</h3>
      </div>

      {/* Rooms */}
      <div className="sidebar_rooms">
        <div className="sidebar_roomsHeader">
          <h4>Add a room : </h4>
          <input
            placeholder={""}
            value={roomToADD}
            onChange={(e) => setRoomToADD(e.target.value)}
          />
          <Add
            className="sidebar_addRoomIcon"
            onClick={() => handleAddRoom()}
          />
        </div>
        <div className="sidebar_roomsList">
          <div className="sideBar_roomsListHeader">
            {/* <h4>Rooms</h4> */}
            {/* <ExpandMore /> */}
          </div>
          {rooms.map(({ id, room }) => (
            <Room key={id} roomName={room.roomName} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar_footer">
        <Button
          onClick={() => {
            if (window.confirm("Do you really want to log out ?")) {
              auth.signOut();
            }
          }}
        >
          LOG OUT
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
