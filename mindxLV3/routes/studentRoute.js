import express from "express";
import { addStudent, deleteStudent, getStudent, getStudentFilter, pagingStudent } from "../ultis/ultis.js";
import { validator } from "../middleware/studentMiddleware.js";
import { errorHandle } from "../ErrorHandeler/error.handeler.js";
export const studentRoute=express.Router();

studentRoute.get("/",getStudentFilter)

studentRoute.delete("/",deleteStudent)
studentRoute.post("/",addStudent)
studentRoute.get("/filter",pagingStudent)

studentRoute.get("/register",validator,(req,res)=>{
    return res.json("Success");
})
studentRoute.use(errorHandle)