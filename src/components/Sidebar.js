import React, { useState } from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { Add, ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Room from "./Room";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

function Sidebar() {
  const [rooms, setRooms] = useState([
    { name: "Gaming Room" },
    { name: "Dev Room" },
    { name: "Chill Room" },
  ]);
  return (
    <div className="sidebar">
      {/* Profil */}
      <div className="sidebar_profil">
        <Avatar
          src="https://image.flaticon.com/icons/png/512/147/147144.png"
          className={useStyles().large}
        />
        <h3>Fettoukh Mohamed Amine</h3>
      </div>

      {/* Rooms */}
      <div className="sidebar_rooms">
        <div className="sidebar_roomsHeader">
          <h4>Add a room</h4>
          <Add className="sidebar_addRoomIcon" />
        </div>
        <div className="sidebar_roomsList">
          <div className="sideBar_roomsListHeader">
            <h4>Rooms</h4>
            <ExpandMore />
          </div>
          {rooms.map(({ name }) => (
            <Room roomName={name} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar_footer"></div>
    </div>
  );
}

export default Sidebar;
