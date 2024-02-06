import express from "express";
import dotenv from "dotenv";
import app from "./index";
import routes from "./routes/index";

dotenv.config();

const server = express();

app.use("/", routes);
