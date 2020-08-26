const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const port = process.env.PORT

// middlewares
app.use(express.urlencoded({extended: false}))

//Connecting to db
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true})

// 

app.listen(port, ()=>console.log('Server started on port : '+port));