
import express from "express";
import { validateToken } from "../controller/validateToken.js";
import { createPostController } from "../controller/CreatePostController.js";
export const PostRoute=express.Router();
PostRoute.post("/",validateToken,createPostController);

