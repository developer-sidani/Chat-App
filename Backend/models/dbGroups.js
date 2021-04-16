import mongoose from "mongoose";

const GroupSchema = mongoose.Schema({
  groupName: String,
  imageUrl: String,
  admin: Array,
  members: Array,
});
export default mongoose.model("GroupDetails", GroupSchema);
