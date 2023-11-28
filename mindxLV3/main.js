// const express = require('express')
// const morgan = require('morgan')
// const fs = require("fs")
// const { error } = require('console')
// const process= require("process")
import express from "express"
import morgan from "morgan"
import fs from "fs"
import process from "process"
import { addStudent } from "./ultis/ultis.js"

import cors from "cors"
import multer from "multer"

import { studentRoute } from "./routes/studentRoute.js"
import { storage, uploadMiddle } from "./middleware/uploadMiddleware.js"

const app = express()
const port = 3000

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.post("/upload",uploadMiddle.single("avatar"),(req,res)=>{
  let a =fs.readFileSync(`./upload/img/${req.file.filename}`,"base64");
  fs.unlinkSync(`./upload/img/${req.file.filename}`)
  return res.json(a);
})
app.use("/",studentRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


