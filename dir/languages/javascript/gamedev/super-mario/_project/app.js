// PACKAGES
const express = require('express'),
      path = require('path'),
      pug = require('pug');

// EXPRESS
const app = express();

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTE: ROOT
app.get('/', (req, res) => {
  res.render('index',{
    title: "Super Mario",
    description: "This is where the description would go."
  });
});

// LISTEN: PORT 3000
app.listen(3000, () => {
  console.log('Port:' + 3000);
});
