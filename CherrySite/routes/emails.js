var express = require('express');
var router = express.Router();

/* GET email listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // use layout for testing
});

router.post('/subscribeEMail', function(req, res, next){

  res.send('You\'re so cool');
  // make this subscribe emails
});

// SEND email newletter

// delete route

module.exports = router;
