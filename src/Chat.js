import { MoreVert, AttachFile, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    axios.post("/messages/new", {
      message: input,
      name: " Kasim",
      timestamp: new Date().toUTCString(),
      received: true,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>MERN build 🔥 </h3>
          <p> Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((e) => (
          <p className={`chat__message ${e.received && "chat__receiver"}`}>
            <span className="chat__name">{e.name}</span>
            {e.message}
            <span className="chat__timestamp">{e.timestamp}</span>
          </p>
        ))}
      </div>
      {/* new Date().toUTCString() */}

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send the message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
