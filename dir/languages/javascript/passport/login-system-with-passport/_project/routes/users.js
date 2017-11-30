var express = require('express'),
    router = express.Router();

// REGISTER
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: "Register Title Goes Here",
    description: "index description"
  });
});


module.exports = router;
