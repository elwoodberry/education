// Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jade = require('jade');
const expressValidator = require('express-validator');

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

// Global Variables
app.use((req, res, next) => {
  res.locals.errors = null;
  next();
});

// Express Validator (Legacy)
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.');
    var root = namespace.shift();
    var formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

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
    title: "Add Customers",
    description: "This is where the description would go.",
    users: users
  });
});

// 'user/add'
app.post('/users/add', (req, res) => {
  req.checkBody('first_name', 'First Name Is Required').notEmpty();
  req.checkBody('last_name', 'Last Name Is Required').notEmpty();
  req.checkBody('user_email', 'Email Is Required').notEmpty();

  //
  var errors = req.validationErrors();

  if(errors){
    console.log('Errors');

    res.render('index', {
      title: 'Error Adding Customer',
      users: users,
      errors: errors
    });
  }else {
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_email: req.body.user_email
    }

    console.log('Success');
  }
});

// Listen On Port 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
