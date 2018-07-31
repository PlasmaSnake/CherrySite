var express = require('express');
var router = express.Router();

var email_controller = require('../controllers/emailsController');

/* GET email listing. */
router.get('/', email_controller.email_list);

/* GET email to database */
router.get('/subscribe',email_controller.email_subscribe_get);

/* POST email to database */
router.post('/subscribe',email_controller.email_subscribe_post);

// delete route
/* GET email to delete*/
router.get('/delete',email_controller.email_delete_get);

/* POST email to delete */
router.post('/delete',email_controller.email_delete_post);

/* GET email to update*/
router.get('/update',email_controller.email_update_get);

/* POST email to update */
router.post('/update',email_controller.email_update_post);

module.exports = router;
