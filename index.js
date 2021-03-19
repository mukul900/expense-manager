const express = require('express');
const api = require('./server/api');
const app = express();
// import modules which you required

const bodyparser=require('body-parser');
// write middlewares here those will be executed before processing any request
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// bootpoint from where routing starts
app.use('/api', api);


module.exports = app;