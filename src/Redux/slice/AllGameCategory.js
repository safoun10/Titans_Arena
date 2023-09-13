import baseApi from "../api/baseApi";

const gameCategory = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGameSearch: builder.query({
            query: (category) => `/Games?category=${category}`,
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useGetGameSearchQuery,
} = gameCategory;