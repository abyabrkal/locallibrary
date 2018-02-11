var mongoose = require('mongoose');

var Schema = mongoose.schema;

var BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.ObjectId, ref:'Author', reqired: true},
        summary: {type: String, required: true},
        isbn: {type: String, required: true},
        genre: [{type: Schema.ObjectId, ref: 'Genre'}],
    }
);

//Virtual for book URL
BookSchema
.virtual('url')
.get(function(){
    return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);