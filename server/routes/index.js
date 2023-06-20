import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserInfo from "../models/userInfo.js";

const router = express.Router();


// Registration route
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = new UserInfo({
      email,
      username,
      password: hashedPassword,
    });

    // Save user to db
    await user.save();
    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

export default router;
