import express from "express";
import { register } from "../controllers/index.js";

const router = express.Router();

//localhost:4000/

router.get("/register", register);

export default router;
