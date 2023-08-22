const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const clusterUrl = process.env.CLUSTERURL;
const databaseName = process.env.DATABASENAME;

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;

const connection = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

module.exports = connection;