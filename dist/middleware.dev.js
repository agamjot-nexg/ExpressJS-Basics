"use strict";

// Middleware
var express = require("express");

var app = express();

var myLogger = function myLogger(req, res, next) {
  console.log('Logging Requests');
  next();
};

var reqTime = function reqTime(req, res, next) {
  req.reqTime = Date.now();
  next();
};

app.use(myLogger);
app.use(reqTime);
app.get("/", function (req, res) {
  res.send("Home Route");
});
app.get("/time", function (req, res) {
  res.send("Current Time: " + req.reqTime);
});
app.listen(3000, function () {
  console.log("Started Server on port 3000");
});