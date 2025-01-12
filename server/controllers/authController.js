const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models");

// Register

const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      hashPassword,
    });
    await newUser.save();
    res.status(500).json({
      success: true,
      message: "The user has been successfully created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error!",
    });
  }
};

module.exports = { register };
