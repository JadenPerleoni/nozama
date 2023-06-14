import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const app = express();
app.use(bodyParser.json());
app.use(cors());


const uri =

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB successfully");

    const db = client.db("admin");
    app.locals.db = db; // Make the database accessible within the app

    // Other Express.js middleware and routes that require database access

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error occurred while connecting to MongoDB:", err);
  });
