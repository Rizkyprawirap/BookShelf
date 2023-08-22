const router = require('express').Router();
const BookController =  require('../controllers/book.controllers');

router.post('/books', BookController.insertBook);
router.get('/books/:id', BookController.getBookById);
router.get('/books', BookController.getBooks);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;