import baseApi from "../api/baseApi";

const blogManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogManagement: builder.query({
            query: () => "/blogs",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetBlogManagementQuery
} = blogManagementApi;