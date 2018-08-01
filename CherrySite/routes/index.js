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

/* GET Archive page. */ //Will use the articles_list callback
router.get('/Archive', article_controller.archive);

/* GET Plays page. */
router.get('/Plays', article_controller.archive);

/* GET NewsArticles page. */
router.get('/Publications', article_controller.archive);

/* GET Books page. */
router.get('/Books', article_controller.archive);

// ARTICLE ROUTES
/* GET Article list --- Also Archive list. */
router.get('/articles', article_controller.article_list);

/* GET Article create*/
router.get('/article/create', article_controller.article_create_get);

/* POST Article create*/
router.get('/article/create', article_controller.article_create_post);

/* GET Article to delete*/
router.get('/article/delete', article_controller.article_delete_get);

/* POST Article to delete*/
router.get('/article/delete', article_controller.article_delete_post);

/* GET Article to update*/
router.get('/article/update', article_controller.article_update_get);

/* POST Article to update*/
router.get('/article/update', article_controller.article_update_post);

// EMAIL ROUTES
/* GET email listing. */
router.get('/emails', emails_controller.email_list);

/* GET email to database */
router.get('/email/subscribe',emails_controller.email_subscribe_get);

/* POST email to database */
router.post('/email/subscribe',emails_controller.email_subscribe_post);

/* GET email to delete*/
router.get('/email/delete',emails_controller.email_delete_get);

/* POST email to delete */
router.post('/email/delete',emails_controller.email_delete_post);

/* GET email to update*/
router.get('/email/update',emails_controller.email_update_get);

/* POST email to update */
router.post('/email/update',emails_controller.email_update_post);

// PUBLICATIONS ROUTES

// BOOKS ROUTES

// PLAYS ROUTE
module.exports = router;


