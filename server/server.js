import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import data from "./routes/index.js";
import mongoose from "mongoose";

dotenv.config();

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/", data);

const uri = `mongodb+srv://${dbUser}:${dbPassword}@nozama.4utnpbc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(4000, () => console.log(`Server running on port ${4000}`))
  )
  .catch((error) => console.log(error));
