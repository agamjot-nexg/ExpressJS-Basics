"use strict";

//HTTP Server with ExpressJS
var express = require("express");

var app = express();
app.get("/ping", function (req, res) {
  res.send("Node Express Application");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});