var Email = require('../models/emails');

exports.email_list = function(req,res){
    res.send('NOT IMPLEMENTED: Showing all emails in database');
}

exports.email_subscribe_post = function(req,res){
    // make this get an email on POST
        // make this subscribe emails
    res.send('NOT IMPLEMENTED: subscribing email test on POST');
    var newUser = new Email({
        email: req.body.email
    });
}

exports.email_subscribe_get = function(req,res){
    // make this get an email on GET
    res.send('NOT IMPLEMENTED: subscribing email test on GET');
    var newUser = new Email({
        email: req.body.email
    });
}

exports.email_delete_post = function(req,res){
    // make this delete an email on POST
    res.send('NOT IMPLEMENTED: delete email test on POST');
}

exports.email_delete_get = function(req,res){
    // make this delete an email on GET
    res.send('NOT IMPLEMENTED: delete email test on GET');
}

exports.email_update_post = function(req,res){
    // make this delete an email on POST
    res.send('NOT IMPLEMENTED: update email test on POST');
}

exports.email_update_get = function(req,res){
    // make this delete an email on GET
    res.send('NOT IMPLEMENTED: update email test on GET');
}