import express from "express";

import { uploadIMGController, uploadImg } from "../controller/uploadIMGController.js";
import { deleteIMG } from "../service/cloudinary/cloudinary.js";
import { validateToken } from "../controller/validateToken.js";

export const MediaRoute=express.Router();

MediaRoute.post("/upload-image",validateToken,uploadImg.array("avatar",[10]),uploadIMGController);
MediaRoute.delete("/delete-img",validateToken,deleteIMG);