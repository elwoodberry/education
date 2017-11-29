var express = require('express'),
    router = express.Router();

// REGISTER
router.get('/register', function(req, res){
  res.render('index', {
    title: "Register Title Goes Here",
    description: "index description"
  })
});

// LOG IN
router.get('/login', function(req, res){
  res.render('login', {
    title: "Log In Title Goes Here",
    description: "log in description"
  })
});


module.exports = router;
