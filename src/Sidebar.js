import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [room, setRoom] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snap) => {
      setRoom(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {room.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
