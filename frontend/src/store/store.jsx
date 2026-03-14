import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./Feautures/Navigation_store";
import HomeSliceReducer from "./Feautures/HomeCards";
import AuthorSlideReducer from "./Feautures/AuthorSlide";

import DetailSliceReducer from "./Feautures/Details";

const store = configureStore({
  reducer: {
    navigation: NavigationSlice,
    homecards: HomeSliceReducer,
    author: AuthorSlideReducer,
    details: DetailSliceReducer,
  },
});

export default store;
