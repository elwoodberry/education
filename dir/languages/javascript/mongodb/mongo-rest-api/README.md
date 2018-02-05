# RESTful API From Scratch Using Node, Express and MongoDB
[https://youtu.be/eB9Fq9I5ocs](https://youtu.be/eB9Fq9I5ocs)



### Create Project Folder
```
$ touch _project
```

### Package.JSON
```
$ npm init
```

### Create App.js
```
$ touch app.js
```

### Create Models directory
```
$ touch models
```
### Install Dependencies.
Express, Body Parser and Mongoose
```
$ npm install --save express body-parser mongoose
```
### Create New Database
```
use eurusd
```
### Create New Collection In Database
```
db.createCollection('m1_2017', 'genre')
```
### Insert Doc Into Collection
Sample Data For Price
```
db.m1_2017s.insert({
  date: "1/2/17 2:00",
  open: 1.05155,
  high: 1.05197,
  low: 1.05155,
  close: 1.0519
})
```
Sample Data For Genres
```
db.genres.insert([
  {
    name: "Self Help"
    },
  {
    name: "Suspense"
  }  
])
```
Sample Data For Books
```
db.books.insert({
  title: "Title Two",
  genre: "Suspense",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  author: "Donald Johnson",
  publisher: "Publisher Two",
  pages: "600",
  url: "http://www.google.com",
  buy_url: "http://www.google.com"
})
```
### Create a model
```
let mongoose = require('mongoose');

// SCHEMA FOR APPLICATION (not the database)
let candleSchema = mongoose.Schema({
  date:{
    type: Date
  },
  open:{
    type: Number
  },
  high:{
    type: Number
  },
  low:{
    type: Number
  },
  close:{
    type: Number
  }
});

// Make Object Accessible
let Candle = module.exports = mongoose.model('Candle', candleSchema);

// FUNC: Get Candles
module.exports.getCandles = function(callback, limit){
  Candle.find(callback).limit(limit);
}

```






### App.js
```
let express = require('express');

let app = express();

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/eurusd_2017');

var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/eurusd');
});

app.listen(3000);
console.log('Ready!');
```


Drop A DataBase
```
$ mongo local --eval "db.dropDatabase()"
```
