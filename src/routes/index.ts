import { Router } from "express";

const router = Router();
import registerRouter from "./register";

router.use("/register", registerRouter);

export default router;
