const BookModel = require('../model/book.model');

async function insertBook(bookObj) {
    bookObj.insertedAt = new Date().toISOString();
    bookObj.updatedAt = new Date().toISOString();

    if (bookObj.pageCount === bookObj.readPage) {
        bookObj.finished = true;
    } else {
        bookObj.finished = false;
    }

    const createdBook = new BookModel(bookObj);
    const savedBook = await createdBook.save();

    return savedBook;
}

async function updateBook(id, bookObj) {
    bookObj.updatedAt = new Date().toISOString();
    if (bookObj.pageCount === bookObj.readPage) {
        bookObj.finished = true;
    } else {
        bookObj.finished = false;
    }

    const updatedBook = await BookModel.findById(id)
    
    Object.assign(updatedBook, bookObj);
    const savedBook = await updatedBook.save();

    return savedBook;
}

async function getBooks() {
    return await BookModel.find({}).select("id bookName publisher")
}

async function getBookById(id) {   
    return await BookModel.findById(id)
}


async function deleteBook(id) {
    return await BookModel.findByIdAndDelete(id)
}

module.exports = { insertBook, getBooks, getBookById, deleteBook, updateBook};
