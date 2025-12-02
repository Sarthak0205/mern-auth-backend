const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

// Protect these routes
router.route("/")
  .post(protect, admin, createUser)   // only admin can create new users
  .get(protect, admin, getUsers);     // only admin can see all users

router.route("/:id")
  .get(protect, getUserById)          // user can view their own profile
  .put(protect, admin, updateUser)    // only admin can update any user
  .delete(protect, admin, deleteUser);// only admin can delete users


module.exports = router;
