import React, { useEffect, useState } from "react";
import "./App.css";
import Pusher from "pusher-js";
import axios from "./axios.js";

import Sidebar from "./Sidebar";
import Chat from "./Chat.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("d7162448733b14ec9003", {
      cluster: "ap2",
    });
    console.log("useeffect 🔥");
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
