var mongoose = require('./dbconnection');

var ClientSchema = new mongoose.Schema({
  name : String,
  key : String,
  });


var Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
