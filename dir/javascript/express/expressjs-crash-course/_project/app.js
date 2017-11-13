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
const users = [{
  id: 1,
  first_name: 'Jeff',
  last_name: 'Johnson',
  email: 'jeff.johnson@gmail.com'
},{
  id: 2,
  first_name: 'Jill',
  last_name: 'Jameson',
  email: 'jill.jameson@gmail.com'
},{
  id: 3,
  first_name: 'Jane',
  last_name: 'Jeremy',
  email: 'jane.jeremy@gmail.com'
}];

// ROUTES

// Root
app.get('/', (req, res) => {
  res.render('index',{
    title: "Welcome To The Customer Application!",
    description: "This is where the description would go.",
    users: users
  });
});

// Listen On Port 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
