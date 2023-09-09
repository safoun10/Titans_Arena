import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
// import blogReducer from './blogSlice';

const store = configureStore({
    // reducer: blogReducer,
    reducer: dataReducer
});

export default store;
