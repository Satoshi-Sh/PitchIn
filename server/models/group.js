const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  stores: [{ type: Schema.Types.ObjectId, ref: "Store" }],
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  max_num: { type: Number, integer: true, required: true },
});

GroupSchema.virtual("memberCount").get(function () {
  return this.users.length;
});
GroupSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Group", GroupSchema);
