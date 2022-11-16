var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/TeamPage', function(req, res, next) {
  res.render('index', { title: 'Team Page' });
});

module.exports = router;
