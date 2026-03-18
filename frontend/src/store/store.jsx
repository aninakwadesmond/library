import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./Feautures/Navigation_store";
import HomeSliceReducer from "./Feautures/HomeCards";
import AuthorSlideReducer from "./Feautures/AuthorSlide";

import DetailSliceReducer from "./Feautures/Details";
import AudioSliceReducer from "./Feautures/AudioSlice";
import CartSliceReducer from "./Feautures/CartSlice"; 
import ChatSliceReducer from './Feautures/ChatSlice'

const store = configureStore({
  reducer: {
    navigation: NavigationSlice,
    homecards: HomeSliceReducer,
    author: AuthorSlideReducer,
    details: DetailSliceReducer,
    audio: AudioSliceReducer,
    cart:CartSliceReducer, 
    chat:ChatSliceReducer
  },
});

export default store;
