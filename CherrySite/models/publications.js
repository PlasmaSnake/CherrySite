var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PubSchema = new Schema(
    {
        title: {type: String, required: true, max: 100},
        content: {type: String, required: true},
        datePublished: {type: Date},
        company: {type:String}
    }
);

//Virtual for title
PubSchema
.virtual('url')
.get(function()
{
    return '/publication/'+ this._id;
});

//Export Model
module.exports = mongoose.model('Publications', PubSchema);