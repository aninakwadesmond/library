import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentBook: {}, quantity:0 , relatedBooks: []};

const DetailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    setQuantity:(state , action)=> {
      state.quantity = action.payload
    }, 
    setRelatedBooks: (state, action)=> {
      state.relatedBooks = action.payload.filter((book, index, booksArrary)=> index = booksArrary.findIndex(o=>o.id === book.id))
    }
   
  },

});

export const { setCurrentBook, setQuantity , setRelatedBooks} = DetailSlice.actions;
export default DetailSlice.reducer;
