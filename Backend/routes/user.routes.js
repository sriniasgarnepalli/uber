const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");
const authMiddleWare = require("../middlewares/auth.middleWare");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long")
  ],
  userController.loginUser
);

router.get("/profile", authMiddleWare.authUser, userController.getUserProfile);

router.post("/logout", authMiddleWare.authUser, userController.logout);
module.exports = router;
