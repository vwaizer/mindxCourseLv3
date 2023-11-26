import express from "express";
import { addStudent, deleteStudent, getStudent, getStudentFilter, pagingStudent } from "../ultis/ultis.js";
export const studentRoute=express.Router();

studentRoute.get("/",getStudentFilter)

studentRoute.delete("/",deleteStudent)
studentRoute.post("/",addStudent)
studentRoute.get("/filter",pagingStudent)