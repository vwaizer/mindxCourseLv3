import express from "express";

import { uploadIMGController, uploadImg } from "../controller/uploadIMGController.js";
import { deleteIMG } from "../service/cloudinary/cloudinary.js";

export const MediaRoute=express.Router();

MediaRoute.post("/upload-image",uploadImg.array("avatar",[10]),uploadIMGController);
MediaRoute.delete("/delete-img",deleteIMG);