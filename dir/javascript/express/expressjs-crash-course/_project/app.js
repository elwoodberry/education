// Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize App Variable
const app = express();

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES

// Root
app.get('/', (req, res) => {
  res.send('What Up?');
});

// Listen On Port 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
