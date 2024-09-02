import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./slices/PostSlice";

export const store = configureStore({
  reducer: {
    posts: PostSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;