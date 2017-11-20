// Packages
const express = require('express');
const bodyParser = require('body-parser');
const jade = require('jade');
const path = require('path');

// EXPRESS
const app = express();

// VIEW ENGINE: JADE
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE: BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Ajax Crash Course',
    description: 'Traversy Media'
  });
});

// GET TEXT FILE
app.get('/get-text-file', (req, res) => {
  res.render('get-text-file', {
    title: 'TEXT ',
    description: ' | Click the button to get response text.'
  });
});

// GET JSON FILE
app.get('/get-json-file', (req, res) => {
  res.render('get-json-file', {
    title: 'JSON ',
    description: ' | Click the button to get response text.'
  });
});

// EXTERNAL API
app.get('/external-api', (req, res) => {
  res.render('external-api', {
    title: 'External API',
    description: ' | Working With The GitHub API'
  });
});

// GET PHP
app.get('/get-php', (req, res) => {
  res.render('get-php', {
    title: 'Get PHP',
    description: ' | Getting Data From PHP file'
  });
});


// LISTEN: PORT 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
