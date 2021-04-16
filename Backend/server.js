// importing
import express from "express";
import mongoose from "mongoose";
import Users from "./models/dbUser";
import Pusher from "pusher";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

app.use(cors());
