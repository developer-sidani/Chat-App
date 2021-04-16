import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  imageUrl: String,
  fireBaseId: Number,
  friendsList: Array,
  groupList: Array,
});
export default mongoose.model("UserDetails", UserSchema);
