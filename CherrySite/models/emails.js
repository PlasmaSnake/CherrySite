var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmailSchema = new Schema(
    {
        email: {type: String, required: true, max: 100},
        domain: {type: String, default: "gmail.com"}
    }
);
//Need to define delete/unsubscribe

//Export Model
module.exports = mongoose.model('Emails', EmailSchema);