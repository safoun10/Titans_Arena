import baseApi from "../api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query({
      query: (id) => `/singleGameComments/${id}`,
      providesTags: ["comments"],
    }),

    postComment: builder.mutation({
      query: (comment) => ({
        url: `/comments`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});
export const { useGetCommentQuery, usePostCommentMutation } = commentApi;
