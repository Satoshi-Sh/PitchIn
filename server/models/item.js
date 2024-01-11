const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  price: { type: Number },
  store: { type: Schema.Types.ObjectId, ref: "Store" },
  created_by: {
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  approved_by: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

ItemSchema.virtual("approveCount").get(function () {
  return this.approved_by.length;
});
ItemSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Item", ItemSchema);
