import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";

const createToken = (user: IUser) => {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
};

export const signup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos..." });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }
  const newUser = new User({ email, password });
  const userSaved = await newUser.save();
  return res.status(201).json(userSaved);
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos..." });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "El usuario no existe" });
  }
  const match = await user.comparePassword(password);
  if (match) {
    const token = createToken(user);
    return res
      .status(200)
      .header("x-access-token", token)
      .json({ token, user });
  }
  return res.status(400).json({ message: "Correo o contraseña incorrectos" });
};

export const profile = (req: Request, res: Response) => {
    //devolvemos el usuario despues de validar el inicio de sesion
    return res.json({ user: req.user });
}

