// src/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state) => {
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setBlogs,
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
} = blogSlice.actions;

export const fetchBlogs = (search) => (dispatch) => {
    dispatch(fetchDataRequest());
    axios
        .get(`https://titans-arena-server.vercel.app/searchblogs?search=${search}`)
        .then((response) => {
            dispatch(setBlogs(response.data));
            dispatch(fetchDataSuccess());
        })
        .catch((error) => {
            console.error(error);
            dispatch(fetchDataFailure('An error occurred while fetching data.'));
        });
};

export const selectBlogs = (state) => state.blogs.blogs;
export const selectLoading = (state) => state.blogs.loading;
export const selectError = (state) => state.blogs.error;

export default blogSlice.reducer;