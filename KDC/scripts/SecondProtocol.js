var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("SecondProtocol here.");
});



module.exports = router;
