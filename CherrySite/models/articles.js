var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {
        title: {type: String, required: true, max: 100},
        articleText: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now}
    }
);

//Virtual for url
ArticleSchema
.virtual('url')
.get(function()
{
    return '/article/'+this._id;
});

//Export Model
module.exports = mongoose.model('Articles', ArticleSchema);