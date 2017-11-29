var express = require('express'),
    router = express.Router();

// ROOT
router.get('/', function(req, res){
  res.render('index', {
    title: "The Index Title Has Been Here",
    description: "index description"
  })
});

module.exports = router;
