var mongoose = require('./dbconnection');

var ItemSchema = new mongoose.Schema({
  name : String,
  key : String,
  service : String
  });


var Server = mongoose.model('Client', ServerSchema);

module.exports = Server;
