var express = require('express');
var path = require('path');
var router = express.Router();
var superagent = require('superagent');
var querystring = require('querystring');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
});


router.post('/FirstRequest', function(req, res) {


    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {

        var para = querystring.parse(body);


        var name = para.name;
        var ip = para.ip;
        var timestamp = para.timestamp;
        var liftetime = para.liftetime;

        superagent.post('localhost:5001/AS/FirstRequest')
            .set('Content-Type', 'application/json')
            .query(body)
            .end(function(err, res) {
            })


    })



})


module.exports = router;
