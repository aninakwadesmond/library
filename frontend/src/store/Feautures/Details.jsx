import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentBook: {} };

const DetailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
  },
});

export const { setCurrentBook } = DetailSlice.actions;
export default DetailSlice.reducer;
