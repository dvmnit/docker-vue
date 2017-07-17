// Connect to the database at the port defined in server configuration file
var mongoose = require('mongoose')
var config = require('../config/config') // config file
mongoose.connect(config.database) 

// Define the neccessary Mongoose Schemas 
var User = require('../models/user') 

// Instantiate the Express Router to hold route definitions
var express = require('express')
var router = express.Router()
router.use(function(req, res, next) {
  next() // use the routes defined below
})

// Begin route definitions here:
// NOTE: Root-level entrypoint is already 'api/users' (see ./router.js)
router.route('/') 
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

router.route('/:username')
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
    User.findOne({username: req.params.username}, function(err, user) {
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

module.exports = router
