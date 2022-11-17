var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/teampage', function(req, res, next) {
  res.render('index', { title: 'Team' });
});

module.exports = router;
