const express = require('express');
const path = require('path');
const jade = require('jade');
const app = express();

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

// Define Dashboard route
app.get('/dash', (req, res) => {
  res.render('app/dash');
});

// 404
app.use((req, res) => {
  // Response type is text and HTML
  res.type('text/html');
  // Response status is 404
  res.status(404);
  // Render the 404 page.
  res.render('errors/404');
});

// 500
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error(err.stack);
  // Response status is 500
  res.status(500);
  // Render the 500 page
  res.render('errors/500');
});

// Listen on open port
app.listen(app.get('port'), () => {
  console.log('Listening Port: ' + app.get('port'));
});
