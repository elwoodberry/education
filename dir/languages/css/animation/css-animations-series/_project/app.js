// PACKAGES
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// ROUTES
var index = require('./routes/index');

// EXPRESS
var app = express();

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MIDDLEWARE (favicon, logger, body-parser, cookie-parser)
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// STATIC PATHES
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

// ROUTES
app.use('/', index);

// ERRORS
// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// PORT
// Listen On Port 3000
app.listen(3000, function(){
  console.log('Port:' + 3000);
});
