import baseApi from "../api/baseApi";

const commentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getComment: builder.query({
            query: () => "/comments",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetCommentQuery
} = commentApi;