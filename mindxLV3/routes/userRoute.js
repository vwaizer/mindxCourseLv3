import express from "express";
import { registerController } from "../controller/registerController.js ";
import { validateRegister } from "../middleware/validateRegister.js";
export const userRoute=express.Router();
userRoute.post("/register",validateRegister,registerController)