const express = require('express');
const path = require('path');
const jade = require('jade');
const app = express();

// Disable header from containing information about the server
app.disable('x-powered-by');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
  console.log('Express Started. Press Ctrl + C to terminate.');
});
