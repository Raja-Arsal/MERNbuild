// importing 1
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

//app config 2
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1075561",
  key: "d7162448733b14ec9003",
  secret: "b028b0d2036c344480f0",
  cluster: "ap2",
  encrypted: true,
});

const db = mongoose.connection;
console.log("yayyyyyyyyyy");
db.once("open", () => {
  console.log("db connected");

  //changestream
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("change isss here", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error in pusher");
    }
  });
});
//changestream

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
//DB config
const connectionURL =
  "mongodb+srv://admin:Ptt9VX0T3FdagL6w@cluster0.5uhyz.mongodb.net/mernchat?retryWrites=true&w=majority";
mongoose.connect(connectionURL),
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

// ???

//api routes 3
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      err.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//api routes for adding messages on mongodb

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//listener 4
app.listen(port, () => console.log(`Listening on 🔥 localhost:${port}`));
