import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';

const store = configureStore({
    reducer: blogReducer
});

export default store;
