var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  Name: String, // define each object's Name must be a String
  Description: String  // define each object's Name must be a String
});

module.exports = mongoose.model('Item', ItemSchema);
