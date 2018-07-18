var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {
        title: {type: String, required: true, max: 100},
        articleText: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now}
    }
);

//Virtual for title
ArticleSchema
.virtual('title')
.get(function()
{
    return this.title;
});

//Virtual for Date created
ArticleSchema
.virtual('dateCreated')
.get(function(){
    return this.dateCreated;
});

//Export Model
module.exports = mongoose.model('Articles', ArticleSchema);