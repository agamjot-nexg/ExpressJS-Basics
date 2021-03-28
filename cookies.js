 // Cookies

 const express = require("express")
 const cookies = require("cookie-parser")
 const app = express()
 
 
 const PORT = 3000;
 
 app.use(cookies());
 
 let users = {
     name: "John",
     Age: 22,
     lastname: "Doe"
 }
 
 app.get('/', (req, res)=>{
     res.send("Cookie Tutorial")
 })
 
 
 app.get('/setuser', (req, res)=>{
     res.cookie("a", users);
     res.send("User data added to cookies");
 })
 
 app.get('/logout', (req,res)=>{
     res.clearCookie('a');
     res.send("User logout success!!")
 })
 
 
 app.get('/getusers', (req,res)=>{
     res.send(req.cookies)
 })
 
 
 
 
 
 
 app.listen(PORT,()=>{
     console.log("Listening on Port 3000")
 })