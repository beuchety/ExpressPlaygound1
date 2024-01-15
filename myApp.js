const express = require('express')
const app = express()

console.log('Hello World')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

module.exports = app
