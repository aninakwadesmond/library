import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  category: "",
  currentHeading: "",
  booksLoading: false,
  sortBy: "",
  query: "",
  search: false,
};
const HomeSlice = createSlice({
  name: "home_card",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCurrentHeading: (state, action) => {
      state.currentHeading = action.payload;
    },
    setBooksLoading: (state, action) => {
      state.booksLoading = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setQueryInput: (state, action) => {
      state.query = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setBooks,
  setCategory,
  setCurrentHeading,
  setBooksLoading,
  setSortBy,
  setQueryInput,
  setSearch,
} = HomeSlice.actions;
export default HomeSlice.reducer;
