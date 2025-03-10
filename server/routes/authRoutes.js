const express = require("express");
const {
  register,
  login,
  logout,
  authMiddleware,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated",
    user: user,
  });
});

module.exports = router;
