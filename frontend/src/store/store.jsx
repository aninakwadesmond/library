import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./Feautures/Navigation_store";

const store = configureStore({
  reducer: { navigation: NavigationSlice },
});

export default store;
