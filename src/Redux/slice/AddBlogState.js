import baseApi from "../api/baseApi";

const addBlogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBlog: builder.mutation({
            query: (blogData) => ({
                url: "/blog",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: blogData,
            }),
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useAddBlogMutation
} = addBlogApi;