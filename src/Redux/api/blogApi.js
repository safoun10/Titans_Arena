import baseApi from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
        query: () => "/blogs"
      }),
      invalidatesTags: ['invalidCash'],
    getBlogSearch: builder.query({
      query: (search) => `/searchblogs?search=${search}`,
    }),
    invalidatesTags: ['invalidCash'],
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`
    }),
    invalidatesTags: ['invalidCash'],
  }),
});

export const { useGetBlogsQuery,useGetBlogSearchQuery,useGetBlogByIdQuery } = blogApi;
