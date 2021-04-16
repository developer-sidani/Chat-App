import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
  message: String,
  username: String,
  timestamp: String,
  imageUrl: String,
});

const RoomsSchema = mongoose.Schema({
  isGroup: Boolean,
  imageUrl: String,
  messages: [MessageSchema],
  name: String,
});

export default mongoose.model("RoomDetails", RoomsSchema);
export default mongoose.model("MessageDetails", MessageSchema);
