# Node.js Login System With Passport
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL(s)**  
1. [Part One](https://youtu.be/Z1ktxiqyiLA) (22:53)
1. [Part Two](https://youtu.be/Z1ktxiqyiLA) (22:53)
1. [Part Three](https://youtu.be/Z1ktxiqyiLA) (22:53)
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Part One Content
1. [Prerequisites](#prerequisites)
1. [Getting Started](#getting-started)
1. [Routes](#routes)
1. [Views](#views)
1. [Modification](#Modification)
## +

## Part Two Content
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
## +

## Part Three Content
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
## +

## Part One

## Prerequisites
Install Node
```
$ (update this)
```
Install MongoDB
```
$ (update this)
```
Create Project Folder
```
$ touch _project
```
Package.json
```
$ npm init
```
Install Dependencies
```
$ npm install --save bcryptjs body-parser connect-flash cookie-parser express pug express-messages express-session express-validator mongodb mongoose passport passport-http passport-local
```
**Learn More About These Packages**  
1. [bcryptjs](https://www.npmjs.com/package/)
1. [body-parser](https://www.npmjs.com/package/)
1. [connect-flash](https://www.npmjs.com/package/)
1. [cookie-parser](https://www.npmjs.com/package/)
1. [express](https://www.npmjs.com/package/)
1. [pug](https://www.npmjs.com/package/)
1. [express-messages](https://www.npmjs.com/package/)
1. [express-session](https://www.npmjs.com/package/)
1. [express-validator](https://www.npmjs.com/package/)
1. [mongodb](https://www.npmjs.com/package/)
1. [mongoose](https://www.npmjs.com/package/)
1. [passport](https://www.npmjs.com/package/)
1. [passport-http](https://www.npmjs.com/package/)
1. [passport-local](https://www.npmjs.com/package/)

## Getting Started
app.js
```
// PACKAGES
var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongo = require('mongodb'),
    mongoose = require('mongoose');

// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/passportprjct');
var db = mongoose.connection;

// ROUTES
var index = require('./routes/index'),
    users = require('./routes/users');

// INITIALIZE APP
var app = express();

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// STATIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESS SESSION
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// PASSPORT INIT
app.use(passport.initialize());
app.use(passport.session());

// EXPRESS VALIDATOR
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

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


// CONNECT FLASH
app.use(flash());

// GLOBAL VARIABLES FOR FLASH MESSAGES
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// MIDDLEWARE: ROUTE FILES
app.use('/', index);
app.use('/users', users);

// SET PORT
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
  console.log('Ready');
});
```

Start MongDB Locally
```
$ mongod
```
Open Mongo
```
$ mongo
```
Create DB for project
```
$ use passportprjct
```
Create USERS collection
```
$ db.createCollection('users');
```

## Routes
Index.js
```
var express = require('express'),
    router = express.Router();

// ROOT
router.get('/', function(req, res){
  res.render('index', {
    title: "The Index Title Has Been Here"
  })
});

module.exports = router;
```
Users.js
```
var express = require('express'),
    router = express.Router();

// REGISTER
router.get('/register', function(req, res){
  res.render('index', {
    title: "Register Title Goes Here"
  })
});

// LOG IN
router.get('/login', function(req, res){
  res.render('index', {
    title: "Log In Title Goes Here"
  })
});


module.exports = router;
```
## Views
1. The 'views' directory
1. views/layouts
1. views/partials

views/layouts/auth.pug
```
```
views/partials/head.pug
```
head

  //- MASTER HEADER

  meta(charset='UTF-8')
  meta(name='viewport' content='width = device-width, initial-scale = 1')
  meta(http-equiv='X-UA-Compatible' content='IE=edge')

  // META
  title #{description}
  meta(name="description" content=" #{description} ")
```
views/index.pug
```
extends layouts/auth.pug

block content

  h1 Login
```
views/register.pug
```
extends layouts/auth.pug

block content

  h1 Register
```
views/dashboard.pug
```
extends layouts/auth.pug

block content

  h1 Dashboard
```

## Static Files
1. Create 'public' directory
1. public/css
1. public/css/style.css
1. public/js
1. public/img

## Models
1. Create models folder
1. models/users.js



## Modification
See [http://mongoosejs.com/docs](http://mongoosejs.com/docs/connections.html#use-mongo-client)
```
(node:1074) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
```



## Part Two


## Part Three
