import baseApi from "../api/baseApi";

const GameReviewsState = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGameReviewsState: builder.query({
            query: (id) => `/reviews/${id}`,
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useGetGameReviewsStateQuery
} = GameReviewsState;