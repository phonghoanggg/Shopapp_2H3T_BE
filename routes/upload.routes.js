import express from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../configs/cloudinaryConfig.js";
import upLoadImageController from "../controllers/image.controller.js";
import upload from "../middlewares/uploadImage.js";

const router = express.Router();
// Route upload
router.post("/upload", upload.array("images", 5), upLoadImageController.uploadImage);
router.delete("/delete", upLoadImageController.removeImage);

export default router;