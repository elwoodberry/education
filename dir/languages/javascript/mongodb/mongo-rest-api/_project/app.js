// Packages
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Express
let app = express();

m1_2017 = require('./models/mdl_candle');
Genre = require('./models/mdl_genre');

// Connect To Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/eurusd');
var db = mongoose.connection;

// GET: Root
app.get('/', function(req, res){
  res.send('Something Went Wrong!');
});

// GET: Genres
app.get('/api/genre', function(req, res){
  Genre.getGenres(function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

// GET: 1M Candles for EURUSD pair in 2017
app.get('/api/eurusd/2017/1m', function(req, res){
  m1_2017.getCandles(function(err, m1_2017s){
    if(err){
      throw err;
    }
    res.json(m1_2017s);
    //res.send(m1_2017s);
  }, 10);
});



// LISTEN:
app.listen(3000);
console.log('Ready!');
