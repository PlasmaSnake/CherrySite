var express = require('express');
var router = express.Router();
var Email = require('../models/emails.js');

/* GET email listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // use layout for testing
});


/* POST email to database */
router.post('/subscribe', function(req, res, next){
  res.send('subscribing email');
});

// SEND email newletter

// delete route

module.exports = router;
