"use strict";

// Views
var express = require("express");

var path = require("path");

var cons = require('consolidate');

var app = express();
var PORT = 3000; // view engine setup

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); //app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('index');
}).listen(PORT, function () {
  console.log("Server started on localhost port 3000");
}); //Syntax to change directory for view files
//  app.set('views','./views')