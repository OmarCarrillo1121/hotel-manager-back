import { Router } from "express";

const router = Router();
import registerRouter from "./register";

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/register", registerRouter);

export default router;
