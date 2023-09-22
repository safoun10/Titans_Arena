import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://titans-arena-server.vercel.app",
    // baseUrl: "http://localhost:5000",
  }),
  tagTypes: ['invalidCache'],
  endpoints: () => ({}),
});

export default baseApi;
