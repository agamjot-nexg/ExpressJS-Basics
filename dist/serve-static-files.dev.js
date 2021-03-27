"use strict";

//Serving Static Files
var express = require("express");

var path = require("path");

var app = express();
var publicpath = path.resolve(__dirname, 'public');
var port = 3000;
app.use(express["static"]('public'));
app.use(express["static"]('images'));
app.use(express["static"]('files'));
app.use(publicpath, express["static"]('static'));
app.get('/', function (req, res) {
  return res.send('Static Files!');
});
app.listen(port, function () {
  return console.log("Example app listening on port port!");
});