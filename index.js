const fs = require('fs')

const inspect = require('object-inspect')

const express = require('express')
const multer = require('multer')

// text-only multipart form handler
const textonly = multer().none()

const app = express(); 
app.get('/', async (req, res) => {
  fs.writeFileSync('/tmp/abc','def')
  fs.renameSync('/tmp/abc','/tmp/def')
  res.send('Hello World')
})

app.post('/test', textonly, async (req, res) => {
  // console.log(JSON.stringify(req))
  // console.log(inspect(req.body))
  console.log(req.body)
  res.json(req.body)
})

module.exports = app
