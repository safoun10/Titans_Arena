// searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    blogs: [],
    loading: false,
    error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk('search/fetchData', async (keyword = '') => {
    try {
        const response = await axios.get(`https://titans-arena-server.vercel.app/searchblogs?search=${keyword}`);
        console.log(response.data);
        return await response.data;
    } catch (error) {
        throw error;
    }
});

// Create a slice for the search
const dataSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
