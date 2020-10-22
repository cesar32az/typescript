import User from "../models/User";
import { RequestHandler } from "express";

export const checkDuplicateEmail: RequestHandler = async (req, res, next) => {
  const email = await User.findOne({
    email: req.body.email,
  });
  if (email) {
    console.log("email en uso");
    return res.status(409).json({ message: "el email ya esta en uso" });
  }
  next();
};
