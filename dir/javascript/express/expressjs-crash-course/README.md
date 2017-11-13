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
