import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="avat"
          src="data:image/jpeg;base64,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"
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchCont">
          <SearchOutlinedIcon />
          <input placeholder="Search or begin new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat name="For back-end devs" head="Node/Express Room" />

        <SidebarChat name="For front-end devs" head="Front-end Room" />
      </div>
    </div>
  );
}

export default Sidebar;
