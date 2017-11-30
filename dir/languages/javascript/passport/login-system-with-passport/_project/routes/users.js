var express = require('express'),
    router = express.Router();

var User = require('../models/user');

// GET REQ: REGISTER
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: "Register Title Goes Here",
    description: "index description"
  });
});

// POST REQ: REGISTER
router.post('/register', function(req, res, next) {
  var name = req.body.name,
      email = req.body.email,
      username = req.body.username,
      password = req.body.password,
      password2 = req.body.password2;

  // VALIDATION
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid.').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('register', {
      log: "Something is Wrong..",
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success_msg', 'You Are Registered And Can Now Log In.');

    res.redirect('/');
  }
});

module.exports = router;
