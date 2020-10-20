import { Router } from "express";
import {
  createPhoto,
  getPhotos,
  getPhoto,
  deletePhoto,
  updatePhoto,
} from "../controllers/photo.controller";
import multer from "../libs/multer";

const router = Router();

router.route("/").post(multer.single("image"), createPhoto).get(getPhotos);

router.route("/:id").get(getPhoto).delete(deletePhoto).put(updatePhoto);

export default router;
