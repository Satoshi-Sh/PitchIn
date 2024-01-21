const User = require("../models/user");
const Group = require("../models/group");
const Store = require("../models/store");
const Item = require("../models/item");
const createAccount = async (req, res) => {
  try {
    const { username, picture, sub } = req.body;
    const user = await User.findOne({ sub });

    if (user) {
      const group = await Group.findOne({ users: user._id })
        .populate("users")
        .populate("stores")
        .populate({
          path: "items",
          populate: [
            {
              path: "store",
              model: Store,
            },
            {
              path: "approved_by",
              model: User,
            },
          ],
        });
      return res.status(200).json({
        message: "User already exists. User logged in.",
        user,
        group,
      });
    } else {
      const newUser = new User({
        sub,
        username,
        image: picture,
      });
      u = await newUser.save();
      return res.status(201).json({
        message: "User created successfully. User signed up.",
        user: u,
      });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Internal server error. Failed to create account.",
    });
  }
};

module.exports = {
  createAccount,
};
