import express, { Application } from "express";
import routes from "./routes/index";
import cors from "cors";

const app: Application = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// ROUTES
app.use("/", routes);

export default app;
