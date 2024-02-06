import { Router } from "express";
import {
  getRegisters,
  getRegister,
  postRegister,
  putRegister,
  deleteRegister,
} from "../handlers/register";

const registerRouter = Router();

registerRouter.get("/", getRegisters);
registerRouter.get("/:id", getRegister);
registerRouter.post("/", postRegister);
registerRouter.put("/:id", putRegister);
registerRouter.delete("/:id", deleteRegister);

export default registerRouter;
