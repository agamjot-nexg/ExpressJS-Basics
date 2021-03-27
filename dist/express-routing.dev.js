"use strict";

// Express Routing
var express = require("express");

var app = express();
var port = 3000;
var data = {
  id: 1,
  name: "John Doe"
};
app.get('/', function (req, res) {
  res.end("Welcome To My Home Page");
});
app.get('/about', function (req, res) {
  res.end("Welcome To My About Page");
});
app.get('/weather', function (req, res) {
  res.sendFile("public/static/abc.js");
});
app.listen(port, function () {
  console.log("Server Started on port 3000");
});