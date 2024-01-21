const Item = require("../models/item");
const User = require("../models/user");

const approveItem = async (req, res) => {
  try {
    const { sub, itemId } = req.body;
    const user = await User.findOne({ sub: sub });
    if (!user) {
      throw new Error("Cannot find the user");
    }
    const updatedItem = await Item.updateOne(
      {
        _id: itemId,
      },
      { $addToSet: { approved_by: user._id } }
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
};
