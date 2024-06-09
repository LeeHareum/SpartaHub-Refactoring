import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsReducer
  }
});

export default store;
