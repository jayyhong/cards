var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var router = require('./src/server/router/router')

var app = express()

app.use(express.static('./src'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use('/api', router)

app.listen(8000, function(err) {
  if (err) {
    return console.log('error')
  }
  console.log('App listening to 8000')
})

