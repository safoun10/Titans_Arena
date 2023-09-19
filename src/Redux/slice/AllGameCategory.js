import baseApi from "../api/baseApi";

const gameCategory = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGameCategory: builder.query({
            query: (category) => `/Games?category=${category}`,
            invalidatesTags: ["invalidCache"],
        }),
        getGameSearch: builder.query({
            query: (search) => `searchGames?search=${search}`,
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useGetGameCategoryQuery,
    useGetGameSearchQuery,
} = gameCategory;