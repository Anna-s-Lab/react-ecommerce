const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
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

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    const passwordMatch = await bcrypt.compare(password, userExists.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password!",
      });
    }

    // Store in .env the secret key
    const token = jwt.sign(
      {
        userId: userExists.id,
        userRole: userExists.role,
        userEmail: userExists.email,
      },
      "CLIENT_SECRET_KEY",
      {
        expiresIn: "1h",
      }
    );
    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          email: userExists.email,
          role: userExists.role,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error!",
    });
  }
};

// Logout
const logout = (req, res) => {
  res.clearCookie("token").status(200).json({
    success: true,
    message: "Logout successful",
  });
};

//Auth Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = {
      userId: decoded.userId,
      userRole: decoded.role,
      userEmail: decoded.email,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = { register, login, logout, authMiddleware };
