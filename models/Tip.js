const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new mongoose.Schema({
  author: { type: Schema.ObjectId, ref: 'User' },
  text: String,
  title: String,
  city: String
})


module.exports = mongoose.model('Tip', tipSchema);