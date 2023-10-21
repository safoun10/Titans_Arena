import baseApi from "../api/baseApi";

const GameReviewsState = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGameReviewsState: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["reviews"],
    }),
    postGameReviews: builder.mutation({
      query: (review) => ({
        url: `/reviews`,
        method: `Post`,
        body: review,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetGameReviewsStateQuery, usePostGameReviewsMutation } = GameReviewsState;
