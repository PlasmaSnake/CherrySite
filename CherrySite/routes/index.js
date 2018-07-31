var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('About');
});
/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('Contact');
});
/* GET Media page. */
router.get('/Media', function(req, res, next) {
  res.render('Media');
});
/* GET Archive page. */
router.get('/Archive', function(req, res, next) {
  res.render('Archive');
});

// Figure out how to do works pages(Books/Plays/Articles)

module.exports = router;
