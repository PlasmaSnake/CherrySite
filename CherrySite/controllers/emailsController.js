var Email = require('../models/emails');

var async = require('async');

exports.email_list = function(req,res){

    Email.find({}, 'email')
    .exec (function(err, databaseTest){
        if(err) return next(err); 
        res.render('databaseTest', {title: 'Mailing List', email_list: databaseTest}); 
    });

}

exports.email_detail = function(req, res){
    res.send('NOT IMPLMENTED: Email:'+ req.params.id);
}

exports.email_subscribe_post = function(req,res){
    // make this get an email on POST
        // make this subscribe emails
    res.send('NOT IMPLEMENTED: subscribing email test on POST');
    var newEmail = new Email({
        email: req.body.email
    });
}

exports.email_subscribe_get = function(req,res){
    // make this get an email on GET
    res.send('NOT IMPLEMENTED: subscribing email test on GET');
    var newEmail = new Email({
        email: req.body.email
    });
    newEmail.save();
    
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