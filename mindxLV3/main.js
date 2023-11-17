const express = require('express')
const morgan = require('morgan')
const fs = require("fs")
const app = express()
const port = 3000
const p={"id":5}
app.use(morgan('combined'))
app.get('/', (req, res) => {
  console.log("hello");
  res.json(p);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})