import baseApi from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    invalidatesTags: ["invalidCache"],
    getBlogSearch: builder.query({
      query: (search) => `/searchblogs?search=${search}`,
      invalidatesTags: ["invalidCache"],
    }),
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
      invalidatesTags: ["invalidCache"],
    }),
    addNewsLetter: builder.mutation({
      query: (newEmail) => ({
        url: "/newsletter",
        method: "POST",
        body: newEmail,
      }),
      invalidatesTags: ["invalidCache"],
    }),
  }),
});

export const {
  useAddNewsLetterMutation,
  useGetBlogsQuery,
  useGetBlogSearchQuery,
  useGetBlogByIdQuery,
} = blogApi;