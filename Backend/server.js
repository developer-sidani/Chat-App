// importing
import express from "express";
import mongoose from "mongoose";
import Users from "./models/dbUser.js";
// import Groups from "./models/dbGroups.js";
// import Rooms from "./models/dbRooms.js";

// import Pusher from "pusher";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

//Real time database without refreshinh
// const pusher = new Pusher({
//   appId: "1189617",
//   key: "d99e139394e42b0ccb80",
//   secret: "18fa7fdccde0738323bc",
//   cluster: "eu",
//   useTLS: true,
// });

//middleware
app.use(express.json());

app.use(cors());

//DB config
const connection_url =
  "mongodb+srv://admin:f5MiUY3wuQam4CA@cluster0.fyguh.mongodb.net/Chatdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("DB is connected");

// api routes restfull api(uses http requests to access data)

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/username", (req, res) => {
  const dbUser = req.body;
  Users.create(dbUser, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen]

app.listen(port, () => console.log(`Listening on localhost:${port}`));
