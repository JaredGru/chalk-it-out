const express = require('express');
const cors = require('./middleware/cors')
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors);
app.use(express.json());

//api endpoints
app.use('',require('./controller/MainController'))

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})

module.exports = {app,port}