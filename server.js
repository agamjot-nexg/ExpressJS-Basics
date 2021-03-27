// Sessions in ExpressJS

const { response } = require('express')
const express = require('express')
const session = require('express-session')
const app = express()

const PORT = process.env.PORT || 3000


app.use(session({
    secret:"Your Secret Key",
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req,res)=>{
    req.session.name = "John"
    return res.send("Session Set")
})
app.get('/session', (req,res)=>{
    var name = req.session.name
    return res.send(name)
})








app.listen(PORT, ()=>{
    console.log(`Listening to requests on https://localhost:${PORT}`);
})