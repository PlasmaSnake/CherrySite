var express = require('express');
var router = express.Router();
var article_controller = require('../controllers/articleController');
var emails_controller = require('../controllers/emailsController');

// NAVIGATION ROUTES
/* GET home page. */
router.get('/', article_controller.index);

/* GET About page. */
router.get('/About', article_controller.about);

/* GET Contact page. */
router.get('/Contact', article_controller.contact);

/* GET Media page. */
router.get('/Media', article_controller.media);

/* GET Archive page. */
router.get('/Archive', article_controller.archive);

// ARTICLE ROUTES
/* GET Article list*/
router.get('/articles/list', article_controller.article_list);

/* GET Article create*/
router.get('/articles/create', article_controller.article_create_get);

/* POST Article create*/
router.get('/articles/create', article_controller.article_create_post);

/* GET Article to delete*/
router.get('/articles/delete', article_controller.article_delete_get);

/* POST Article to delete*/
router.get('/articles/delete', article_controller.article_delete_post);

/* GET Article to update*/
router.get('/articles/update', article_controller.article_update_get);

/* POST Article to update*/
router.get('/articles/update', article_controller.article_update_post);

// EMAIL ROUTES
/* GET email listing. */
router.get('/emails/list', emails_controller.email_list);

/* GET email to database */
router.get('/emails/subscribe',emails_controller.email_subscribe_get);

/* POST email to database */
router.post('/emails/subscribe',emails_controller.email_subscribe_post);

/* GET email to delete*/
router.get('/emails/delete',emails_controller.email_delete_get);

/* POST email to delete */
router.post('/emails/delete',emails_controller.email_delete_post);

/* GET email to update*/
router.get('/emails/update',emails_controller.email_update_get);

/* POST email to update */
router.post('/emails/update',emails_controller.email_update_post);
// Figure out how to do works pages(Books/Plays/Articles)

module.exports = router;
