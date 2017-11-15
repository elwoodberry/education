# ExpressJS Crash Course
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/gnsO8-xJ8rs)  
**Duration**: 01:15:46  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [What Is Express?](#what-is-express) (00:37)
1. [What You'll Learn](#what-youll-learn) (01:46)
1. [Installation and Setup](#installation-and-setup) (03:12)
1. [Middleware](#middleware) (15:35)
1. [Parse JSON](#parse-json) (22:15)
1. [Template Engines](#template-engines) (24:34)
1. [Pass Data To The UI](#pass-data-to-the-ui) (27:55)
1. [Forms and Input](#forms-and-input) (36:32)
1. [MongoDB](#mongodb) (51:27)
## +

## What Is Express?
[Express](https://expressjs.com/) is a minimalistic, open source web framework for Node.js.
* Used to build powerful web applications and APIs
* Most popular framework for Node.js
* Uses MVC concepts

## What You'll Learn
1. Express Installation & Setup
1. Middleware
1. Routing
1. Template Engines (EJS, Handlebars, Jade)
1. Forms & Input
1. Models, ORM & Databases - MongoDB
1. Express Generator

## Installation and Setup

### Requirements
1. Node.js
1. NPM

### Initialize Package.json
```
$ npm init
```
### Install Express, Body Parser
```
$ npm install --save express body-parser
```
### Create Entry File
```
$ touch app.js
```
### Package Dependencies
[Learn More About 'Path' Core Module](http://www.tutorialsteacher.com/nodejs/nodejs-modules)
```
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
```
### Initialize App Variable
```
const app = express();
```
### Define Root Route
```
app.get('/', (req, res) => {
  res.send('What Up?');
});
```
### Listen On Port 3000
```
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
```

## Middleware

### Example
Logger Middleware
```
const logger = function(req, res, next){
  console.log('Logging...');
  next();
};
```
### Body Parser
```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```
### Public Files
Static files (css, jquery, etc.)
```
app.use(express.static(path.join(__dirname, 'public')));
```

## Parse JSON
Parse the people object out to the browser.
```
const person = {
  name: 'Jeff',
  age: 30
}
```
### JSON Response
```
res.json(person);
```

## Template Engines
```
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
```
## Pass Data To The UI
### Passing A String
```
app.get('/', (req, res) => {
  res.render('index',{
    title: "Welcome To The Customer Application!",
    description: "This is where the description would go."
  });
});
```
### Display The Variable
I'm using JADE as my template engine.
```
#{title}
```
### Create A Users Array
```
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
```
### Update The Route
```
app.get('/', (req, res) => {
  res.render('index',{
    title: "Welcome To The Customer Application!",
    description: "This is where the description would go.",
    users: users
  });
});
```
### Display A User
```
#{users[0].first_name} #{users[0].last_name}
```

## Forms and Input

### Create The Form
Using jade template engine
```
form
  .form-group
    // label(for="firstName") First Name
    input(type="text" class="form-control" id="firstName" name="first_name" placeholder="First Name")
  .form-group
    // label(for="lastName") Last Name
    input(type="text" class="form-control" id="lastName" name="last_name" placeholder="Last Name")
  .form-group
    // label(for="email") Email
    input(type="email" class="form-control" id="email" name="user_email" placeholder="Email")
  .form-group
    input(type="submit" class="btn btn-secondary" id="submit" value="+ Add User" style="cursor:pointer;")

```
### Add Attributes To The Form
```
form(method="POST" action="/users/add")
```
### Create POST request for '/users/add'
```
app.post('/users/add', (req, res) => {
  console.log('Form Submitted');
});
```
### Create a New User Object
```
app.post('/users/add', (req, res) => {
  let newUser = {
    fName: req.body.first_name,
    lName: req.body.last_name,
    email: req.body.user_email
  };
  console.log(newUser);
});
```
### Form Validation
See [Express Validator](https://www.npmjs.com/package/express-validator) NPM package.  
```
$ npm install --save express-validator
```
### Add Express Validator to app.js
#### Legacy Usage.  
See [Legacy API](https://github.com/ctavan/express-validator#legacy-api)  
Sets global middleware in your express app and decorating the request object with new methods.  
You must mount the middleware in your app before you get access to the validation/sanitization methods:  
```
const expressValidator = require('express-validator');
app.use(expressValidator(middlewareOptions));
```
#### Version 4 Usage
```
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
```


## MongoDB

### Install MongoDB
See [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Start MongoDB
#### Open a terminal and enter the following.
```
$ mongod
```
#### Open a second terminal window and enter the following:
```
$ mongo
```
#### Show al the Databases
From the second terminal window, type the following.
```
$ show dbs
```
#### Create a new database
```
$ use customerapp
```
#### Create a collection in the new database.
```
$ db.createCollection('users')
```
#### Show all the collections in this database.
```
$ show collections
```
#### Insert A User Into This Collection
```
$ db.users.insert([{first_name:'Jeff', last_name:'Sessions', user_email:'jeff.sessions@gmail.com'}, {first_name:'Donald', last_name:'Trump', user_email:'donald.trump@gmail.com'}, {first_name:'Bob', last_name:'Mueller', user_email:'bob.mueller@gmail.com'}])
```
#### Show All Entries In The Collection
```
$ db.users.find()
```

### MONGOJS
See [Github | MongoJS](https://github.com/mafintosh/mongojs)  

#### Install MongoJS
```
$ npm install mongojs --save
```
#### Include MongoJS in the project
```
const mongojs = require('mongojs');

// Database
const db = mongojs('customerapp', ['users']);
```
#### Update the app.js file
```
app.get('/', (req, res) => {
  db.users.find((err, docs) => {
    console.log(docs);
    res.render('index',{
      title: "Add Customers",
      description: "This is where the description would go.",
      users: users
    });  
  });
});
```
#### Switch from static array of users to docs from database.
```
app.get('/', (req, res) => {
  db.users.find((err, docs) => {
    console.log(docs);
    res.render('index',{
      title: "Add Customers",
      description: "This is where the description would go.",
      users: docs
    });  
  });
});
```
#### Update the 'user/add' route
```
...  

else {
  var newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_email: req.body.user_email
  }

  console.log('Success');

  // Insert To Database
  db.users.insert(newUser, (err, result) => {
    if(err){
      console.log(err)
    }
    res.redirect('/');
  });
}
```

### DELETE REQUEST (01:01:50)
Making a delete request can be a little more tricky.  
Making a link that fires off a delete request is not that simple.  

**Recommended Method**  
Using jQuery(or JavaScript) to make a delete request through aJax.  

#### Add HTML
```
ul
each user in users.length ? users : ['There are no users.']
  li= user.first_name + " " + user.last_name
    a(href="#" class="deleteUser" style="padding: 0 10px;") Delete
```
#### Include jQuery
```
script(src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js")
```
#### Create/Include main.js
```
script(src="js/main.js")
```
