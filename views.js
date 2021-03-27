// Views

const express = require("express");
const path = require("path");
const cons = require('consolidate');



const app = express();


const PORT = 5000;  

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req,res)=>{
    res.render('index')
}).listen(PORT, ()=>{
    console.log("Server started on localhost port 5000")
})

//Syntax to change directory for view files
//  app.set('views','./views')

