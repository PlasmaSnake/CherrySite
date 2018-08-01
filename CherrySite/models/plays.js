var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlaySchema = new Schema(
    {
        title: {type: String, required: true, max: 100},
        summary: {type: String, required: true},
        dateCreated: {type: Date},
        genre: {type: String}
    }
);

//Virtual for title
PlaySchema
.virtual('url')
.get(function()
{
    return '/play/'+ this._id;
});

//Export Model
module.exports = mongoose.model('Plays', PlaySchema);