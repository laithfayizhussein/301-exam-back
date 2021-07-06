const express = require('express') // require the express package
const cors = require('cors');
const axios = require('axios'); // require the package
require('dotenv').config();

const app = express(); // initialize your express app instance
app.use(express.json());
app.use(cors()); // after you initialize your express app instance

const {getDrink  ,addFav ,getFav ,  deleteFav , updateFav} = require('./controllar/drinks.control')


const PORT = process.env.PORT ;

const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true, useUnifiedTopology: true});

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
// endpoint to get data from the api 
app.get('/theDrinks' , getDrink)
// create fav data 
app.post('/favorite' , addFav)
// render  the data i add to fav
app.get('/favorite' , getFav)
// for delete
app.delete('/favorite/:idDrink',deleteFav )
// for update 
app.put('/favorite/:idDrink',updateFav )
 



app.listen(PORT) 