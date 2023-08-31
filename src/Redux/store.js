// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducer';

const store = configureStore({
    reducer: dataReducer
});

export default store;
