import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentBook: {}, quantity:0 };

const DetailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    setQuantity:(state , action)=> {
      state.quantity = action.payload
    }
   
  },

});

export const { setCurrentBook, setQuantity } = DetailSlice.actions;
export default DetailSlice.reducer;
