const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  address: { type: Schema.Types.ObjectId, ref: "Address" },
});
module.exports = mongoose.model("User", UserSchema);
