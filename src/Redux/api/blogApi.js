import baseApi from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    invalidatesTags: ["invalidCash"],
    getBlogSearch: builder.query({
      query: (search) => `/searchblogs?search=${search}`,
      invalidatesTags: ["invalidCash"],
    }),
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
      invalidatesTags: ["invalidCash"],
    }),
    addNewsLetter: builder.mutation({
      query: (newEmail) => ({
        url: "/newsletter",
        method: "POST",
        body: newEmail,
      }),
      invalidatesTags: ["invalidCash"],
    }),
  }),
});

export const {
  useAddNewsLetterMutation,
  useGetBlogsQuery,
  useGetBlogSearchQuery,
  useGetBlogByIdQuery,
} = blogApi;
