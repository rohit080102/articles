const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/articles');
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports = userModel;
