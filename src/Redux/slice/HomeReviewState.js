import baseApi from "../api/baseApi";

const homeReviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getHomeReview: builder.query({
            query: () => "/home-review",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetHomeReviewQuery
} = homeReviewApi;