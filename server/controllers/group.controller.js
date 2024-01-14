const Group = require("../models/group");

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

module.exports = {
  getAllGroups,
};
