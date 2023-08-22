const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: String,
    year: Number,
    author: String,
    summary: String,
    publisher: String,
    pageCount: Number,
    readPage: Number,
    reading: Boolean,
    finished: Boolean,
    insertedAt: Date,
    updatedAt: Date,
});

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;
