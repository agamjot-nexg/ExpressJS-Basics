// Core Express

// Express Form

const express = require("express")
const path = require("path")
const cons = require('consolidate');


const app = express()


const PORT = 3000

app.use(express.urlencoded({
    extended: true
}))
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/form_submit', (req,res)=>{
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const country = req.body.country
    const subject = req.body.subject
    res.end(`Your First Name is: ${firstname} and Last Name  is: ${lastname} and your Country and Subject are as follows :${country} :${subject} `)

})

app.listen(PORT, ()=>{
    console.log("Server started on localhost port 3000")
})