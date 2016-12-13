var express = require('express');
var path = require('path');
var router = express.Router();
var sa = require('superagent');



/* GET home page. */
router.get('/', function(req, res, next) {

    sa.post('localhost:5001/')
        .set('Content-Type', 'application/json')
        .query('{"name":"tj","pet":"tobi"}')
        .end(function(err, res) {
            console.log(res);
        });
});
//
// var headers = {
//     'User-Agent': 'Super Agent/0.0.1',
//     'Content-Type': 'applicatoin/x-www-form-urlencoded'
// }
//
// var options = {
//     url: '5001',
//     method: 'POST',
//     headers: headers,
//     form: {
//         'IP': '192.168.1.1',
//         'Time': 'NOW'
//     }
// }
//
//
//
// request(options, function(error, response, body) {
//         console.log(body);
//     })
//     //res.sendFile(path.join(__dirname, '../view', 'index.html'));







module.exports = router;
