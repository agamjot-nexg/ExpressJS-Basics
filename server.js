//Serving Static Files


const express = require("express");
const path = require("path");



const app = express()
const publicpath = path.resolve(__dirname, 'public')


const port = 3000


app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('files'));
app.use( publicpath, express.static('static'));

app.get('/', (req, res) => res.send('Static Files!'))
app.listen(port, () => console.log(`Example app listening on port port!`))