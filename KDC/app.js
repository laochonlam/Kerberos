// Dependencies
var express = require('express');

// Routes
var AS = require('./routes/AS');
var TGS = require('./routes/TGS');

// App
var app = express();


// Route Service
app.use('/AS', AS);

module.exports = app;
