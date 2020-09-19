import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import Sidebar from "./Sidebar";

function SidebarChat({ name, head }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{head}</h2>
        <p> {name} </p>
      </div>
    </div>
  );
}

export default SidebarChat;
