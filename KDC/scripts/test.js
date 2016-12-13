var express = require('express');
var path = require('path');
var router = express.Router();
var querystring = require('querystring');



/* GET home page. */
router.post('/', function(req, res, next) {

  var para = querystring.parse(req);
  console.log(req.query);
    res.send("here.");
});



module.exports = router;
