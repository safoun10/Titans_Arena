import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ['invalidCash'],
  endpoints: () => ({}),
});

// export const { useGetPostQuery } = baseApi;

export default baseApi;
