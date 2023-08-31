import { createSlice } from "@reduxjs/toolkit";


// https://titans-arena-server.vercel.app/blogs

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		value: {},
	},
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
