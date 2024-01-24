const Group = require("../models/group");
const User = require("../models/user");

const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find({}).populate("users").exec();
    return res.status(200).json({
      sucess: true,
      groups,
    });
  } catch (e) {
    console.error(e);
    return res.status(503).json({
      message: "Couldn't retrieve the group data",
      success: false,
    });
  }
};

const addMember = async (req, res) => {
  try {
    const { sub, groupId } = req.body;
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(403).json({
        sucess: false,
        message: "Cannot find the group",
      });
    } else if (group.max_num === group.memberCount) {
      return res.status(500).json({
        sucess: false,
        message: "No more spots for this group",
      });
    }
    const user = await User.findOne({ sub });
    if (!user) {
      return res.status(403).json({
        sucess: false,
        message: "Cannot find the user",
      });
    }
    group.users.push(user._id);
    await group.save();
    res.status(201).json({
      success: true,
      message: "The User joined the group successfully",
    });
  } catch (e) {
    console.error(e);
    return res.status(503).json({
      message: "Couldn't join the group",
      success: false,
    });
  }
};

module.exports = {
  getAllGroups,
  addMember,
};
