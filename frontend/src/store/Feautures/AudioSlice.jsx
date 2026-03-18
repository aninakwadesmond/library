import { createSlice } from "@reduxjs/toolkit";

const initialState = { play: "" };

const AudioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setPlay: (state, action) => {
      state.play = action.payload;
    },
  },
});

export const { setPlay } = AudioSlice.actions;
export default AudioSlice.reducer;
