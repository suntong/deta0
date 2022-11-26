const fs = require('fs')

const inspect = require('object-inspect')

const express = require('express')
const bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const app = express(); 
app.get('/', async (req, res) => {
  fs.writeFileSync('/tmp/abc','def')
  fs.renameSync('/tmp/abc','/tmp/def')
  res.send('Hello World')
})

app.post('/test', urlencodedParser, async (req, res) => {
  // console.log(JSON.stringify(req))
  // console.log(inspect(req.body))
  console.log(req.body)
  res.json(req.body)
})

module.exports = app
