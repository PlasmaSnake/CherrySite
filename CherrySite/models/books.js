var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {type: String, required: true, max: 100},
        summary: {type: String, required: true},
        dateCreated: {type: Date},
        genre: {type: String}
    }
);

//Virtual for title
BookSchema
.virtual('url')
.get(function()
{
    return '/book/'+ this._id;
});

//Export Model
module.exports = mongoose.model('Books', BookSchema);