const User = require("../models/user");
const Group = require("../models/group");
const createAccount = async (req, res) => {
  try {
    const { username, picture, sub } = req.body;
    const user = await User.findOne({ sub });

    if (user) {
      const group = await Group.findOne({ users: { $elemMatch: { sub } } });
      console.log(group);
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
