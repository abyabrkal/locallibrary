// Represents a specific copy of a book someone might borrow 
var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var BookInstanceSchema = Schema(
    {
        book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', require: true},
        imprint: {type: String, required: true},
        status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
        due_back: {type: Date, default: Date.now},
    }
);

//Virtual for book instance URL
BookInstanceSchema
.virtual('url')
.get(function(){
    return '/catalog/bookinstance/' + this._id;
});

//Virtual property for formatted due date
BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('BookInstanceSchema', BookInstanceSchema);