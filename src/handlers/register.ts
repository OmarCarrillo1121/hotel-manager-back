import { Request, Response } from "express";

export const getRegisters = (req: Request, res: Response) => {
  res.json({
    msg: "getRegisters",
  });
};

export const getRegister = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getRegister",
    id,
  });
};

export const postRegister = (req: Request, res: Response) => {
  const { body } = req.body;
  res.json({
    msg: "postRegister",
    body,
  });
};

export const putRegister = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req.body;
  res.json({
    msg: "putRegister",
    id,
    body,
  });
};

export const deleteRegister = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteRegister",
    id,
  });
};
