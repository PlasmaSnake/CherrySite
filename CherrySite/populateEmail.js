#! /usr/bin/env node

console.log('This script populates some test emails to your database. Specified database as argument - e.g.: populateEmail mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Email = require('./models/emails')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var emails = []

function emailCreate(user_email, cb) {
  emaildetail = {email:user_email}
  var email = new Email(emaildetail);
       
  email.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Email: ' + email);
    emails.push(email)
    cb(null, email)
  }  );
}


function createEmails(cb) {
    async.parallel([
        function(callback) {
          emailCreate("michaelsy@gmail.com", callback)
        },
        function(callback) {
            emailCreate("cherrysy@gmail.com", callback)
        },
        function(callback) {
            emailCreate("abe@yahoo.com", callback)
        }    
        ],
        // Optional callback
        cb);
}



async.series([
    createEmails
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Emails: '+emails);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



