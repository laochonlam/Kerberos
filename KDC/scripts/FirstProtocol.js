var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("FirstProtocol here.");
});



module.exports = router;
