const BookService = require('../services/book.service');

async function insertBook(req, res) {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

    if (!name) {
        return res.status(400).json({ status: "fail", message: "Gagal menambahkan buku. Mohon isi nama buku" });
    }
    if (readPage > pageCount) {
        return res.status(400).json({ status: "fail", message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount" });
    }

    const bookObj = { name, year, author, summary, publisher, pageCount, readPage, reading };

    try {
        const insertBookResponse = await BookService.insertBook(bookObj);
        res.status(201).json({ status: "success", message: "Buku berhasil ditambahkan", data: insertBookResponse });
    } catch (error) {
        res.status(404).json({ status: "fail", message: "Error while creating book!" });
    }
}

async function getBooks(req, res) {
    try {
        const getBooksResponse = await BookService.getBooks();
        res.status(200).json({ status: "success", data: getBooksResponse });
    } catch (error) {
        res.status(404).json({ message: "Buku tidak ditemukan" });
    }
}

async function getBookById(req, res) {
    const {id} = req.params
    try {
        const getBookResponse = await BookService.getBookById(id);
        res.status(200).json({ status: "success", data: getBookResponse });
    } catch (error) {
        return res.status(404).json({ status: "fail", message: "Buku tidak ditemukan" });
    }
}

async function deleteBook(req, res) {
    const {id} = req.params
    try {
        const deleteResponse = await BookService.deleteBook(id);
        res.status(200).json({ status: "success", message: "Buku berhasil dihapus" });
    } catch (error) {
        return res.status(404).json({ status: "fail", message: "Buku gagal dihapus. Id tidak ditemukan" });
    }
}

async function updateBook(req, res) {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
    const { id } = req.params

    if (!name) {
        return res.status(400).json({ status: "fail", message: "Gagal memperbarui buku. Mohon isi nama buku" });
    }
    if (readPage > pageCount) {
        return res.status(400).json({ status: "fail", message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount" });
    }

    const bookObj = { name, year, author, summary, publisher, pageCount, readPage, reading };

    try {
        const updateBookResponse = await BookService.updateBook(id, bookObj);
        res.status(200).json({ status: "success", message: "Buku berhasil diperbarui" });
    } catch (error) {
        res.status(404).json({ status: "fail", message: "Gagal memperbarui buku. Id tidak ditemukan" });
    }
}

module.exports = {insertBook, getBooks, getBookById, deleteBook, updateBook}