var express = require('express')
var app = express()  

// Allow app to parse the body of requests (required for 'req.body' calls)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 

// Configure app to use router for paths matching '/api'
var router = require('./routes/router')
app.use('/api', router)   

// Start listening for requests on the port specified in server config file
var config = require('./config/config') // config file
app.listen(config.port)
console.log('Listening on port ' + config.port)
