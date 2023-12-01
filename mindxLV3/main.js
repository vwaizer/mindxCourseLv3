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
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors"
const app = express()
const port = 3000
const p={"id":5}
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
require("dotenv").config(); 

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.post('/', (req, res) => {
  let a=fs.readFileSync("students.json");
  addStudent(...req.body,a);
  
  console.log(JSON.parse(a));
  
  return res.json(JSON.parse(a));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


