import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://titans-arena-server.vercel.app",
  }),
  tagTypes: ['invalidCash'],
  endpoints: () => ({}),
});

// export const { useGetPostQuery } = baseApi;

export default baseApi;
