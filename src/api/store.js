import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
