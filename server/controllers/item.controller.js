const Item = require("../models/item");
const User = require("../models/user");
const Group = require("../models/group");
const mongoose = require("mongoose");

const addItem = async (req, res) => {
  try {
    const { name, price, description, storeId, sub, groupId } = req.body;
    const user = await User.findOne({ sub: sub });
    if (!user) {
      throw new Error("Cannot find the user");
    }
    const group = await Group.findOne({ _id: groupId });
    if (!group) {
      throw new Error("Cannot find the group");
    }
    const newItem = new Item({
      name,
      description,
      price,
      store: new mongoose.Types.ObjectId(storeId),
      approved_by: [new mongoose.Types.ObjectId(user._id)],
    });

    await newItem.save();

    group.items.push(newItem);
    await group.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Item added to the group successfully",
        item: newItem,
      });
  } catch (e) {
    console.error(e);
    res.status(502).json({ success: false, message: "Item was not added." });
  }
};

const approveItem = async (req, res) => {
  try {
    const { sub, itemId } = req.body;
    const user = await User.findOne({ sub: sub });
    if (!user) {
      throw new Error("Cannot find the user");
    }
    const updatedItem = await Item.findOneAndUpdate(
      {
        _id: itemId,
      },
      { $addToSet: { approved_by: user._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      updatedItem,
    });
  } catch (e) {
    console.log(e);
    res.status(502).json({ success: false, message: "Item was not updated." });
  }
};

module.exports = {
  approveItem,
  addItem,
};
