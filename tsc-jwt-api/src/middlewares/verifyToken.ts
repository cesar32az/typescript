import jwt from "jsonwebtoken";
import config from "../config";
import { NextFunction, Request, Response } from "express";

interface IPayload {
  _id: string;
  iat: number;
  exp: number;
}


export const verifyToken = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-access-token");
  if (!token) {
    return res.status(401).json({ message: "acceso denegado" });
  }
  const payload = jwt.verify(
    token,
    process.env.SECRET || config.SECRET
  ) as IPayload;
  req.userId= payload._id;
  next();
};

