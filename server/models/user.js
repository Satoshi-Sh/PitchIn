const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  image: { type: String },
  sub: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
