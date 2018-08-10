var Email = require('../models/emails');

var {body, validationResult} = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');

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

exports.email_subscribe_post = [
    
    body('email', 'Email required').isEmail().trim(),
    sanitizeBody('email').trim().escape(),
    function(req,res,next){
        const errors = validationResult(req);  
        var newEmail = new Email({
            email: req.body.email
        });

        if(!errors.isEmpty()){
            // if there are errors tell the form to (render the page)?
            return;
        }
        else{
            // check if it exists
            Email.findOne({name : req.body.email})
            .exec( function(err, found_email){
                if (err) { return next(err);}
                
                if (found_email) {
                    // dupe found
                    res.redirect('index');
                }
                else {
                    newEmail.save(function (err){
                        if (err) {return next(err);}
                        res.redirect('index');
                    });
                }
            });
        }
    }   
];

exports.email_subscribe_get = function(req,res){
    // make this get an email on GET 
    res.send('NOT IMPLEMENTED: subscribing email test on GET');
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