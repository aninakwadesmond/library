const { Router } = require('express');
const booksRoute = Router();
const axios = require('axios');
const { Books } = require('../Models/books-model');

async function saveBooksOnLoad() {
  try {
    console.log('books to be saved');
    const booksexist = await Books.find({});
    if (booksexist.length > 0) return;
    const { data } = await axios.get('https://gutendex.com/books', {
      params: { search: 'pro', page: 1, languages: 'en, fr' },
    });

    console.log('data frpom fetch gutensdex', data);

    // console.log('a');

    //cleaning data to suit my db

    const cleanedBooks = data.results.map((book) => ({
      id: book.id,
      title: book.title,
      download_count: book.download_count,
      image: book.formats['image/jpeg'],
      authors: book.authors[0],
      summaries: book.summaries,
      formats: book.formats,
      bookshelves: book.bookshelves,
    }));

    console.log('cleaned data', cleanedBooks);

    await Books.insertMany(cleanedBooks);
    console.log('books save in the db');
    return;
  } catch (error) {
    console.log(error.message);
    console.errror(error.message);
    // return res.status(400).json({ message: error || error?.message });
  }
}
//routes

let cachedBooks = null;
let lastfetch = 0;
booksRoute.get('/', async (req, res) => {
  let now = Date.now();

  if (cachedBooks && now - lastfetch < 10 * 60 * 1000) {
    return res.status(200).json(cachedBooks);
  }
  try {
    const books = await Books.find({}).select('-_id');
    cachedBooks = books;
    lastfetch = now;

    return res.status(200).json(books);
  } catch (error) {
    return res.status(200).json({ message: error || error?.message });
  }
});

let searchInput = '';
let cachedBooksSearch = [];
const randomValue = Math.floor(Math.random() * 10);
booksRoute.get('/search', async (req, res) => {
  let { search = '', page = 0, count = 0, skip = 10 } = req.query;
  console.log('search started', search, 'page = ', page);

  if (page > 0) {
    console.log('ready to paginate', 'pages = ', page);
    console.log(cachedBooksSearch.length, 'counts');
    console.log(cachedBooksSearch.slice((page - 1) * 10, page * 10));
    return res
      .status(200)
      .json(cachedBooksSearch.slice(skip * (page - 1), skip + 10));
  }

  if (search === searchInput && page === 0) {
    return res
      .status(200)
      .json(cachedBooksSearch.slice(randomValue, randomValue + 10));
  }

  try {
    const { data } = await axios.get('https://gutendex.com/books', {
      params: { search, page: 1, languages: 'en, fr' },
    });

    const searchedbooks = data.results.map((book) => ({
      id: book.id,
      title: book.title,
      download_count: book.download_count,
      authors: book.authors[0],
      image: book.formats['image/jpeg'],
      summaries: book.summaries,
      formats: book.formats,
      bookshelves: book.bookshelves,
    }));

    searchInput = search;
    cachedBooksSearch = searchedbooks;
    console.log(
      cachedBooksSearch.length,
      'number of books in cached',
      cachedBooksSearch.slice(0, 10),
    );
    console.log(cachedBooksSearch.slice(0, 10));
    return res
      .status(200)
      .json(cachedBooksSearch.slice(randomValue, randomValue + 10));
  } catch (error) {
    return res.status(400).json({ message: error?.message });
  }
});

let relatedSearch = '';
let cachedBooksRelated = null;
booksRoute.get('/related', async (req, res) => {
  const { related } = req.query;
  console.log('related query', related);
  if (!related)
    return res
      .status(404)
      .json({ message: 'related books need to pass related' });

  if (relatedSearch === related) {
    return res.status(200).json(cachedBooksRelated);
  }

  try {
    const { data } = await axios.get('https://gutendex.com/books', {
      params: { search: related, page: 1, languages: 'en, fr' },
    });

    const cleanedRelated = data.results.map((book) => ({
      id: book.id,
      title: book.title,
      download_count: book.download_count,
      image: book.formats['image/jpeg'],
      authors: book.authors[0],
      summaries: book.summaries,
      formats: book.formats,
      bookshelves: book.bookshelves,
    }));

    relatedSearch = related;
    cachedBooksRelated = cleanedRelated;

    return res.status(200).json(cleanedRelated);
  } catch (error) {
    return res.status(400).json(error || error?.message);
  }
});

booksRoute.get('/audiotext', async (req, res) => {
  console.log('audiotext hit');
  const { url } = req.query;
  console.log('audiotext hit', url);

  try {
    const response = await axios.get(`${url}`);
    console.log('response', response);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    console.log('message', error?.message);
    return res.status(400).json(error);
  }
});

module.exports = { saveBooksOnLoad, booksRoute };

// booksRoute.poss
