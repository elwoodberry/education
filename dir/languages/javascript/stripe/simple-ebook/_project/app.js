// PACKAGES
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_dpsPzoxcYWJQP9HX0g5Jpvdf');
const jade = require('jade');
const path = require('path');

// PORT
const port = process.env.PORT || 5000;

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

// ROUTE: ROOT
app.get('/', (req, res) => {
  res.render('index', {
    title: 'A Beginner’s Guide To Launching An Ecommerce Website.',
    description: 'No Software Required | No Experience Necessary'
  });
});

// ROUTE: SUCCESS
app.get('/success', (req, res) => {
  res.render('success');
});

// ROUTE: CHARGE
app.post('/charge', (req, res) => {
  const amount = 2500;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description: 'Web Development eBook',
    currency: 'usd',
    customer: customer.id
  }))
  .then(charge => res.render('success'));

  // console.log(req.body);
  // res.send('Test');
});

// LISTEN
app.listen(port, () => {
  console.log('Server has started on :' + port);
});
