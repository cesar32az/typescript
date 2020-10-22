import { RequestHandler } from "express";
import User, { User as model } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";

export const signup: RequestHandler = async (req, res): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password: await bcrypt.hash(req.body.password, 5),
    });
    const userSaved = await newUser.save();
    const token = jwt.sign({ id: userSaved._id }, config.SECRET, {
      expiresIn: 86400, //token expira en 24 horas
    });
    res.json({token})
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Faltan datos por ingresar" });
  }
};

export const signin: RequestHandler = async (req, res) => {

    try {
        const {email, password} = req.body
        const userFound= User.findOne({email})

        if (!userFound) {
            return res.json({})
        }
    } catch (error) {
        console.log(error)
    }
};

export const profile: RequestHandler = async (req, res): Promise<void> => {
  res.send("profile");
};
