const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new mongoose.Schema({
  author: String,
  text: String,
  title: String,
  city: String
})


module.exports = mongoose.model('Tip', tipSchema);