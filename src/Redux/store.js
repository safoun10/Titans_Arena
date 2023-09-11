import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import baseApi from "./api/baseApi";
// import blogReducer from './blogSlice';

const store = configureStore({
  // reducer: blogReducer,

  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
