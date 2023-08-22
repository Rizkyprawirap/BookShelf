const express = require('express');
const BookRoute = require('./routers/book.route');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use('/v1', BookRoute);

module.exports = app;