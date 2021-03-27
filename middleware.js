// Middleware


const express = require("express");
const app = express();


const myLogger = function(req,res,next){
    console.log('Logging Requests');
    next();
}

const reqTime = (req,res,next)=>{
    req.reqTime = Date.now();
    next();
}
app.use(myLogger);
app.use(reqTime);
app.get("/",(req,res)=>{
   res.send("Home Route");
})
app.get("/time",(req,res)=>{
   res.send("Current Time: " + req.reqTime);
})

app.listen(3000, ()=>{console.log("Started Server on port 3000")})