var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/About', function(req, res, next) {
  res.render('About');
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact');
});

router.get('/Media', function(req, res, next) {
  res.render('Media');
});

router.get('/Archive', function(req, res, next) {
  res.render('Archive');
});

// Figure out how to do works (Books/Plays/Articles)

module.exports = router;
