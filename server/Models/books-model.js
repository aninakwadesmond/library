const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth_yeear: { type: Number },
  death_year: { type: Number },
});
const schemaBooks = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  download_count: { type: Number, required: true },
  image: { type: String, required: true },
  authors: [authorSchema],
  summaries: { type: Array },
  formats: { type: Object },
  bookshelves: { type: Array },
});

const Books = mongoose.model('Books', schemaBooks);

module.exports = { Books };
