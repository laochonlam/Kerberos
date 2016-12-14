// Dependencies
var express = require('express');

// Routes
// var First = require('./scripts/FirstProtocol');
// var Second = require('./scripts/SecondProtocol');
// var Third = require('./scripts/ThirdProtocol');
var test = require('./routes/test');
// App
var app = express();


// Route Service
// app.use('/FirstProtocol', First);
// app.use('/SecondProtocol', Second);
// app.use('/ThirdProtocol', Third);

app.use('/', test);

module.exports = app;
