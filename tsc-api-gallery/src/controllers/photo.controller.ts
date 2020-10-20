import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export const createPhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { title, description } = req.body;

  const newPhoto = {
    title,
    description,
    imagePath: req.file.path,
  };
  const photo = new Photo(newPhoto);
  const photoSaved = await photo.save();
  console.log(photoSaved);

  return res.json({
    message: "foto guardada exitosamente",
    photo,
  });
};

export const getPhotos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const photos = await Photo.find();

  return res.json({
    photos,
  });
};

export const getPhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const photo = await Photo.findById(id);
  return res.json(photo);
};

export const deletePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const photo = await Photo.findByIdAndDelete(id);

  if (photo) {
    await fs.unlink(path.resolve(photo.imagePath));
  }

  return res.json({ message: "foto eliminada", photo });
};

export const updatePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedPhoto = await Photo.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    { new: true }
  );
  return res.json({
    message: "foto actualizada",
    updatedPhoto,
  });
};
