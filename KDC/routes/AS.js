var express = require('express');
var path = require('path');
var router = express.Router();
var querystring = require('querystring');
var crypto = require('../crypto/crypto');


var tgsSessionKey = "randomkey";
var tgsName = "MyTGS";
var ClientKey = "ClientKey";
var ServerKey = "ServerKey";

/****************************/
//tgsName
var lifeTime;
var date;
//tgtSessionKey


//tgtResponse
/***************************/

/**************************************/
var ClientName;
//tgsName;
var timeStamp;
var ip;
var lifeTime;
//tgtSessionKey

//TicketGrantingTicket
/*************************************/



router.post('/FirstRequest', function(req, res, next) {

    console.log("[POST] /FirstRequest");

    var para = JSON.stringify(req.query);

    console.log(para);


    ClientName = req.query.name;
    lifeTime = req.query.lifeTime;
    date = req.query.timeStamp;
    ip = req.query.ip;

    /*******************************/
    var TGTResponse = {
            "tgsName": tgsName,
            "timeStamp": date,
            "lifeTime": lifeTime,
            "tgsSessionKey": tgsSessionKey
        }
        //tgsResponse
        /******************************/

    var TGTResponse_encrypt = crypto.encrypt(JSON.stringify(TGTResponse), ClientKey);

    /*******************************/
    var TicketGrantingTicket = {
            "ClientName": ClientName,
            "tgsName": tgsName,
            "timeStamp": date,
            "ip": ip,
            "lifeTime": lifeTime,
            "tgsSessionKey": tgsSessionKey
        }
        //TicketGrantingTicket
        /******************************/

    var TicketGrantingTicket_encrypt = crypto.encrypt(JSON.stringify(TicketGrantingTicket), ServerKey);

    var FirstResponse = {
        "TGTResponse": TGTResponse_encrypt,
        "TicketGrantingTicket": TicketGrantingTicket_encrypt


    }
    res.send(FirstResponse);
});


module.exports = router;
