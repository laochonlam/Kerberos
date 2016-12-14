var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("AS here.");
});



module.exports = router;
