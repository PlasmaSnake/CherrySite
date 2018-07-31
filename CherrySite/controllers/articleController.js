var Article = require('../models/articles');

// WEBSITE NAVIGATION CONTROLS
// TODO Find out if I need next
exports.index = function(req,res){
    res.render('index');
}

exports.about = function(req,res){
    res.render('about');
}

exports.media = function(req,res){
    res.render('media');
}

exports.contact = function(req,res){
    res.render('contact');
}

exports.archive = function(req,res){
    res.render('archive');
    // TODO something with article_list
}

// ARTICLE CONTROLS
exports.article_list = function(req,res){
    res.send('NOT IMPLEMENTED: Showing all articles in database');
}

exports.article_create_post = function(req,res){
    // make this get an article on POST
        // make this subscribe articles
    res.send('NOT IMPLEMENTED: creating article test on POST');
    var newArticle = new Article({
        
    });
}

exports.article_create_get = function(req,res){
    // make this get an article on GET
    res.send('NOT IMPLEMENTED: creating article test on GET');
    var newArticle = new Article({
        
    });
}

exports.article_delete_post = function(req,res){
    // make this delete an article on POST
    res.send('NOT IMPLEMENTED: delete article test on POST');
}

exports.article_delete_get = function(req,res){
    // make this delete an article on GET
    res.send('NOT IMPLEMENTED: delete article test on GET');
}

exports.article_update_post = function(req,res){
    // make this delete an article on POST
    res.send('NOT IMPLEMENTED: update article test on POST');
}

exports.article_update_get = function(req,res){
    // make this delete an article on GET
    res.send('NOT IMPLEMENTED: update article test on GET');
}