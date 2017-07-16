// api/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
  email: { type: String, required: true, unique: true },
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
  // relationships: {
  //   posts: [{
  //     id: {type: Schema.Types.ObjectId},
  //     kind: {type: String},
  //     link: {type: String}
  // }]
});

module.exports = mongoose.model('User', UserSchema);

//todo: 
// profile picture
// priveleges
// verify email and password format
// encrypt password
