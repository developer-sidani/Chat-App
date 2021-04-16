import mongoose from "mongoose";

const FriendRequestSchema = mongoose.Schema({
  Sender: String,
  Reciever: String,
  status: String,
  timestamp: String,
});
export default mongoose.model("FriendRequestDetails", FriendRequestSchema);
