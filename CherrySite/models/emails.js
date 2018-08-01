var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmailSchema = new Schema(
    {
        email: {type: String, required: true, max: 100}
    }
);

//Export Model
module.exports = mongoose.model('Emails', EmailSchema);