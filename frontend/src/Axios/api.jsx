// central api

import axios from "axios";
const api2 = axios.create({
  baseURL: "https://gutendex.com",
});
// baseURL: "https://openlibrary.org",
// timeout: 10000,
// const url = `https://gutendex.com/books?search=${query}`;

const api = axios.create({
  baseURL: "https://openlibrary.org",
});

const apiAuthor = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export { api, api2, apiAuthor };
