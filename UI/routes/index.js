var express = require('express');
var path = require('path');
var router = express.Router();
var superagent = require('superagent');
var querystring = require('querystring');
var request = require('request');

var date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("[GET] /");
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
});


router.post('/FirstRequest', function(req, res) {

    var a;

    console.log("[POST] /FirstRequest");
    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {

        var para = querystring.parse(body);

        var name = para.name;
        var ip = para.ip;
        var timeStamp = date;
        var lifeTime = para.lifeTime;
        //
        superagent.post('localhost:5001/AS/FirstRequest')
            .set('Content-Type', 'application/json')
            .query(body)
            .end(function(err, resback) {
                console.log(resback.body);
                res.send(resback.body);
            });
    })
})

module.exports = router;
