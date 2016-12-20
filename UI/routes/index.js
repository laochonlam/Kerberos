var express = require('express');
var path = require('path');
var router = express.Router();
var superagent = require('superagent');
var querystring = require('querystring');
var request = require('request');

var date = new Date();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
});


router.post('/FirstRequest', function(req, res) {

    var a;


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
            .end(function(err,ress) {
                console.log(ress.body);
                res.send(ress.body);
            });
        //console.log(body);
    //   var fucky = {};
    //   request({
    //   uri: "localhost:5001/AS/FirstRequest",
    //   method: "POST",
    //   timeout: 10000,
    //
    // }, function(error, response, body) {
    //   console.log(body);
    // });




    })



})

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
module.exports = router;
