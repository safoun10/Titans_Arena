import baseApi from "../api/baseApi";

const CategoryState = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategoryState: builder.query({
            query: (category) => `/games?category=${category}`,
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useGetCategoryStateQuery
} = CategoryState;