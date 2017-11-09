// Require Express, Path & Jade
const express = require('express');
const path = require('path');
const jade = require('jade');

// Define 'app' variable as the Express function.
const app = express();

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

// Define about route
app.get('/about', (req, res) => {
  res.render('about');
});

// Listen on open port
app.listen(app.get('port'), () => {
  console.log('Listening Port: ' + app.get('port'));
});
