import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [], authorName: "" };
const AuthorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthorBooks: (state, action) => {
      state.books = action.payload;
    },
    setAuhtorName: (state, action) => {
      state.authorName = action.payload;
    },
  },
});

export const { setAuthorBooks, setAuhtorName } = AuthorSlice.actions;
export default AuthorSlice.reducer;
