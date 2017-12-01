var express = require('express'),
    router = express.Router();

// ROOT
router.get('/', function(req, res){
  res.render('index', {
    title: "The Index Title Has Been Here",
    description: "index description"
  })
});

// DASHBOARD
router.get('/dashboard', ensureAuthenticated, function(req, res){
  res.render('dashboard', {
    title: "Dashboard Title Has Been Here",
    description: "index description"
  })
});

function ensureAuthenticated(req, res, next){
      if(req.isAuthenticated()){
        return next();
      }else {
        req.flash('error_msg', 'You Are Not Logged In');
        res.redirect('/users/login');
      }
}

module.exports = router;
