var express = require('express');
var path = require('path');
var router = express.Router();
var querystring = require('querystring');
var crypto = require('../crypto/crypto');

router.post('/FirstRequest', function(req, res, next) {

    var para = JSON.stringify(req.query);

    console.log(para);
    console.log(crypto.encrypt(para,"qwertyui"));


    res.send("here.");
});


module.exports = router;
