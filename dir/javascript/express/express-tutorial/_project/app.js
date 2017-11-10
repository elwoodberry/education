// Require Express, Path & Jade
const express = require('express');
const path = require('path');
const jade = require('jade');
const formidable = require('formidable');
const credentials = require('./credentials');
const session = require('express-session');
const parseurl = require('parseurl');
const fs = require('fs')

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

// Route for processing the form
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

// Route for the upload
app.get('/upload', (req, res) => {
  let now = new Date();
  res.render('upload', {
    year: now.getFullYear(),
    month: now.getMonth()
  });
});

// Passing the year and date from the route above
app.post('/upload/:year/:month', (req, res) => {

  let form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, file){
    if(err)
      return res.redirect(303, '/upload-error');
      console.log('Received File');
      console.log(file);
      // Redirect to the thank you view
      res.redirect(303, '/thankyou');
  });

});

// Set the cookie
app.get('/cookie', (req, res) => {
    res.cookie('username', 'Elwood Berry', {expire: new Date() + 9999}).send('Username has the value of Elwood Berry');
});

// Show cookie in the console
app.get('/listcookies', (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.send('Look in the console for cookies');
});

// Delete cookies
app.get('/delete', (req, res) => {
  res.clearCookie('username');
  res.send('Username Cookie deleted.');
});

//
app.use(session({
  resave: false, // Only store session if a change has been made
  saveUninitialized: true, // Store session if it is new even if it hasn't been modified.
  secret: credentials.cookieSecret,
}));

// Track how many times a user has come to this page.
app.use((req, res, next) => {
  // Define total number of views.
  let views = req.session.views;
  // The pathname they are currently on
  let pathname = parseurl(req).pathname;

  if(!views){ // If there are no views...
    // Create an array where the key is the url and
    views = req.session.views = {};
  }

  // Each time increment
  views[pathname] = (views[pathname] || 0 ) + 1;

  next();

});

// Display the number of times in the browser
app.get('/viewcount', (req, res, next) => {
  res.send('You have viewed this page ' + req.session.views['/viewcount'] + ' times.');
});

// Read a file
app.get('/readfile', (req, res, next) => {
  fs.readFile('./public/randomfile.txt', (err, data) => {
    if(err){
      return console.error(err);
    }
    res.send("The File: " + data.toString());
  });
});

// Write a file
app.get('/writefile', (req, res, next) => {
  fs.writeFile('./public/randomfile-2.txt', 'This is some text that was created.', (err) => {
    if(err){
      return console.error(err);
    }
  });

  // Read the file that was created.
  fs.readFile('./public/randomfile-2.txt', (err, data) => {
    if(err){
      return console.error(err);
    }
    res.send("The File: " + data.toString());
  });
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
