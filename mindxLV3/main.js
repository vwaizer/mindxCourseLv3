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
import {  makeToken, validateToken } from "./controller/validateToken.js"
import { databaseUnit } from "./service/database/database.js"
const app = express()
const port = 3000
const p={"id":5}
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

databaseUnit.run();
// app.post('/', (req, res) => {
//   let a=fs.readFileSync("students.json");
//   addStudent(...req.body,a);
  
  
  
//   return res.json(JSON.parse(a));
// })
// app.post('/register',makeToken);
// app.post('/login',validateToken);


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




