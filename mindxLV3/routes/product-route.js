import express from "express";
export const productRoute=express.Router();
import { addStudent } from "../ultis/ultis.js";
import fs from "fs";
let a=fs.readFileSync("students.json");
productRoute.get('/', (req, res) => {
  
    addStudent(req.body,a);
    
    console.log(JSON.parse(a));
    
    return res.json(JSON.parse(a));
  })
