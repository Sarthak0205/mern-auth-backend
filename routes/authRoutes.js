const express = require("express");
const { 
  registerUser, 
  loginUser, 
  getMe, 
  updateProfile, 
  changePassword 
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected
router.get("/me", protect, getMe);
router.put("/me", protect, updateProfile);              // update profile
router.put("/change-password", protect, changePassword); // change password

module.exports = router;
