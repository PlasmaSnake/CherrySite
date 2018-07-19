var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmailSchema = new Schema(
    {
        email: {type: String, required: true, max: 100},
        domain: {type: String, default: "gmail.com"}
    }
);

//Virtual for email
EmailSchema
.virtual('Email')
.get(function()
{
    return this.email;
});

//Virtual for domain
EmailSchema
.virtual('domain')
.get(function(){
    return this.domain;
});

//Need to define delete/unsubscribe

//Export Model
module.exports = mongoose.model('Emails', EmailSchema);