
// server.js

// DEPENDENCY DEFINITIONS
// third-party packages
var express = require('express')            // express server
var bodyParser = require('body-parser')     // body parser (for json requests)
var mongoose = require('mongoose')          // mongoose database api
// app-specific requirements
var config = require('./config/config')     // server configuration
var User = require('./models/user')         // mongoose user schema

// SERVER SETUP
// port and database connections
var port = config.port
mongoose.connect(config.database) 

// express server setup
var app = express()                    
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// express router setup
var router = express.Router()
router.use(function(req, res, next) {
  next() // use the routes defined below
})

// API MIDDLEWARE
router.route('/users')
  // creates a user
  .post(function(req, res) {
    var user = new User()   
    user.email = req.body.email   
    user.username = req.body.username
    user.password = req.body.password
    user.save(function(err) {
      if (err) res.send(err)
      else res.json({ 
        message: 'User created: ' + req.body.username,
        user: user
      })
    })  
  })

  // gets all users
  .get(function(req, res) {
    User.find({}, {'__v':0}, function(err, users) {
      if (err) res.send(err)
      else res.json({
        message: "Users found: " + users.length,
        users: users
      })
    })
  })

router.route('/users/:username')
  // gets :username
  .get(function(req, res) {
    User.find({username: req.params.username}, function(err, user) {
      if (err) res.send(err)
      else res.json({ 
        message: 'User found: ' + req.params.username,
        user: user,
      })    
    })
  })
    
  // updates :username
  .patch(function(req, res) {
    User.findById(req.params.username, function(err, user) {
      if (err) res.send(err)
      user.email = (req.body.email ? req.body.email : user.email)
      user.username = (req.body.username ? req.body.username : user.username)
      user.password = (req.body.password ? req.body.password : user.password)
      user.save(function(err) {
        if (err) res.send(err)
        else res.json({ 
          message: 'User updated: ' + req.params.username,
          user: user,
        })
      })  
    })
  }) 

  // deletes :username
  .delete(function(req, res) {
    User.findOneAndRemove({username:req.params.username}, function(err, user) {
      if (err) res.send(err)
      else res.json({ 
        message: (user ? 
          'User deleted: ' + req.params.username : 
          'Failed to delete user (match not found): ' + req.params.username),
        user: user
      })
    })
  })

router.get('/', function(req, res) {
  res.send('Welcome to the API!')
})

// SERVER STARTUP
app.use('/api', router)
app.listen(port);
console.log('Magic happens on port ' + port) // logs the active port to console
