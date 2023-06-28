import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserInfo from "../models/userInfo.js";
import axios from "axios";
import { ObjectId } from "mongodb";
import { getAuthToken } from "../authToken.js";

const authToken = await getAuthToken();


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

// Login route

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user in db
    const user = await UserInfo.findOne({ username });

    // If the user doesn't exist or the password is incorrect, return an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      "swaggoat12"
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error signing in" });
  }
});

// Verify token for protected resources

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Missing jwt token" });
  }

  jwt.verify(token, "swaggoat12", (error, decodedToken) => {
    if (error) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.userId = decodedToken.userId;
    next();
  });
};

// Example of protected route
router.get("/protectedresource", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

router.get("/search", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ebay.com/buy/browse/v1/item_summary/search",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
          "X-EBAY-C-MARKETPLACE-ID": "EBAY-US",
        },
        params: req.query,
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Adds item id to Array in database attached to user's account.
router.post("/cart/add", verifyToken, async (req, res) => {
  const userId = req.headers["userid"];
  const item = req.body.itemId;
  console.log(req.body);

  try {
    // Finds the user who wants to update their cart
    const query = { _id: new ObjectId(userId) };
    // Command to push the item id to the user's cart
    const newItem = { $push: { cart: item } };
    // Pushes the item to the user's cart and stores the result.
    const result = await UserInfo.updateOne(query, newItem);

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to retrieve item data to display in cart.
router.get("/cart/retrieve", verifyToken, async (req, res) => {
  const userId = req.headers["userid"];
  const items = [];

  try {
    const query = { _id: new ObjectId(userId) };
    const user = await UserInfo.findOne(query);
    if (!user) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const cart = user.cart;

    for (const itemId of cart) {
      const encodedItemId = encodeURIComponent(itemId);
      const url = `https://api.ebay.com/buy/browse/v1/item/${encodedItemId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      items.push(response.data);
    }
    res.json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
