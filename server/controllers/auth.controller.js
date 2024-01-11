const User = require("../models/user");

const createAccount = async (req, res) => {
  try {
    const { username, picture, sub } = req.body;
    const user = await User.findOne({ sub });
    console.log(user);
    if (user) {
      return res.status(200).json({
        message: "User already exists. User logged in.",
        user: user,
      });
    } else {
      const newUser = new User({
        sub,
        username,
        image: picture,
      });
      await newUser.save();
      return res.status(201).json({
        message: "User created successfully. User signed up.",
        user: newUser,
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
