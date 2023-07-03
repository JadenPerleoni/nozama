import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.get("/randomitem", async (req, res) => {
  const url = "https://api.api-ninjas.com/v1/randomword";

  // Get a random word
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    });
    const randomWord = response.data.word;
    // Get item from ebay API
    const item = await axios.get("http://localhost:4000/search", {
      params: {
        q: randomWord,
        sortOrder: "PRICE_PLUS_SHIPPING_LOWEST",
        rating: "BELOW_2",
        limit: 1,
      },
    });
    console.log(randomWord);
    res.json(item.data.itemSummaries);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
