const app = require('./app');
const db = require('./config/db');
const bookModel = require('./model/book.model');
require('dotenv').config(); 

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});