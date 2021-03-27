// Express Routing

const express = require("express");


const app = express();

const port = 3000;

const data = {
    id: 1,
    name: "John Doe",
}

app.get('/', (req,res)=>{
    res.end("Welcome To My Home Page")
})
app.get('/about', (req,res)=>{
    res.end("Welcome To My About Page")
})
app.get('/weather', (req,res)=>{
    res.sendFile("public/static/abc.js")
})

app.listen(port,()=>{console.log("Server Started on port 3000")})