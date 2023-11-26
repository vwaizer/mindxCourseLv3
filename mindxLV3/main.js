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
import {  productRoute } from "./routes/product-route.js"
import cors from "cors"
import { studentRoute } from "./routes/studentRoute.js"
const app = express()
const port = 3000
const p={"id":5}
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.use("/",studentRoute)
app.use("/product",productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


