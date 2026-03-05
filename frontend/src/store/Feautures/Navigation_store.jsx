import { createSlice } from "@reduxjs/toolkit";

const initialState = { sidenav: false };
const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    openNav: (state) => {
      state.sidenav = !state.sidenav;
    },
  },
});

export const { openNav } = NavigationSlice.actions;

export default NavigationSlice.reducer;
