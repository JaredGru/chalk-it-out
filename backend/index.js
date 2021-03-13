const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

var corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());

//api endpoints
app.use('',require('./controller/MainController'))

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})

module.exports = {app,port}