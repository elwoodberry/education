// Require Express, Path & Jade
const express = require('express');
const path = require('path');
const jade = require('jade');
const formidable = require('formidable');
const credentials = require('./credentials');

// Define 'app' variable as the Express function.
const app = express();

// Set up Body parser
app.use(require('body-parser').urlencoded({extended: true}));

// Allow app to use cookies
app.use(require('cookie-parser')(credentials.cookieSecret));

// Disable header from containing information about the server
app.disable('x-powered-by');

// Define view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Define Port that application will run on
app.set('port', process.env.PORT || 3000);

// Allow access to static files
app.use(express.static(__dirname + '/public'));

// Define root route
app.get('/', (req, res) => {
  res.render('index');
});

// Display URL in the console.
// The next function looks for the next proper route.
app.use((req, res, next) => {
    console.log('Looking for URL: ' + req.url);
    next();
});

// Throw an error for route that does not exist.
app.get('/junk', (req, res, next) => {
  console.log('Tried to access /junk.');
  throw new Error('/junk does not exist');
});

// Catch an error
app.use((err, req, res, next) => {
  console.log('Error:' + err.message);
  next();
});

// Define about route
app.get('/about', (req, res) => {
  res.render('about');
});

// Define contact route
app.get('/contact', (req, res) => {
  res.render('contact', {csrf: 'CSRF Token Here'});
});

// Define Thank You route
app.get('/thankyou', (req, res) => {
  res.render('thankyou');
});

app.post('/process', (req, res) => {
    // Log the request query of the form
    console.log('Form: ' + req.query.form);
    // Log the Token
    console.log('Token: ' + req.body._csrf);
    // Log the email
    console.log('Email: ' + req.body.email);
    // Log the question
    console.log('Question: ' + req.body.question);
    // Redirect to the thank you view
    res.redirect(303, '/thankyou');
});

// 404
app.use((req, res) => {
  // Response type is text and HTML
  res.type('text/html');
  // Response status is 404
  res.status(404);
  // Render the 404 page.
  res.render('404');
});

// 500
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error(err.stack);
  // Response status is 500
  res.status(500);
  // Render the 500 page
  res.render('500');
});

// Listen on open port
app.listen(app.get('port'), () => {
  console.log('Listening Port: ' + app.get('port'));
});
