import { RequestHandler, Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";

export const signup: RequestHandler = async (req, res): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const newUser: IUser = new User({
      username,
      email,
      password: await bcrypt.hash(req.body.password, 5),
    });

    const userSaved = await newUser.save();
    console.log(userSaved);

    const token = jwt.sign({ _id: userSaved._id }, config.SECRET, {
      expiresIn: 86400, //token expira en 24 horas
    });

    res.header("x-access-token", token).json(userSaved);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Faltan datos por ingresar" });
  }
};

export const signin: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.json({ message: "no existe el usuario ingresado" });
    }

    const matchPassword: Boolean = await bcrypt.compare(
      password,
      userFound.password
    );
    if (!matchPassword) {
      return res.json({ message: "contraseña incorrecta" });
    }
    const token = jwt.sign({ _id: userFound._id }, config.SECRET, {
      expiresIn: 86400, //token expira en 24 horas
    });

    res.header("x-access-token", token).json(userFound);
  } catch (error) {
    console.log(error);
  }
};

//solucionar problema con req
export const profile = async (req:any , res: Response) => {
  try {
    const id = req.userId;
    const user = await User.findById(id, { password: 0 });
    if (!user)
      return res.json({ message: "Acceso denegado, no existe el usuario" });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

