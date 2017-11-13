// Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jade = require('jade');

// Initialize App Variable
const app = express();

// VIEW ENGINE
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Public (Static) Directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON
const people = [{
  name: 'Jeff',
  age: 30
},{
  name: 'Jane',
  age: 23
},{
  name: 'Jill',
  age: 34
}]

// ROUTES

// Root
app.get('/', (req, res) => {
  // res.send(people);
  res.render('index',{
    title: "Welcome To The Customer Application!",
    description: "This is where the description would go."
  });
});

// Listen On Port 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
