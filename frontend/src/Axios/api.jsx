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

const server = axios.create({
  baseURL: "https://library-1-txiy.onrender.com",
  // baseURL: "http://localhost:5000",
  //http://localhost:5000
  // https://library-1-txiy.onrender.com
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// const server = axios.create({
//   baseURL:""
// })

export { api, api2, apiAuthor, server };
