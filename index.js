const fs = require('fs')

const express = require('express');

const app = express(); 
app.get('/', async (req, res) => {
  fs.writeFileSync('/tmp/abc','def')
  res.send('Hello World')
});

module.exports = app;
