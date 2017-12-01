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
  res.locals.user = req.user || null;
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
