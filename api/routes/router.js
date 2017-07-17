var express = require('express')
var router = express.Router()

// Respond to root-level GET requests with a simple message
router.get('/', function(req, res){
  res.send('Welcome to the API!')
})

// Use router defined in './users' as the entrypoint to path '/users'
// NOTE: Paths are appended recursively, so really '/api/users' (see server.js)
var userRoutes = require('./users')
router.use('/users', userRoutes);

module.exports = router;
