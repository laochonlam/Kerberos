// Dependencies
var express = require('express');
var path = require('path');


// Routes
var index = require('./routes/index');


// App
var app = express();


// Add path
app.use(express.static(path.join(__dirname, 'public')));


// Route Service
app.use('/', index);
app.use('/add', index);


module.exports = app;
