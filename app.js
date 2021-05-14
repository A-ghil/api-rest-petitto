const express = require ('express');
const app = express();

const rotaPets = require('./routes/pets');


app.use('/pets', rotaPets);



  
module.exports = app;