var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //Redirect the index page to new index defined at the path /catalog 
  res.redirect('/catalog');
});

module.exports = router;
