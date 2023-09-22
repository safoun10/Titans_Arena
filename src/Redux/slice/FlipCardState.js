import baseApi from "../api/baseApi";

const flipCardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFlipCard: builder.query({
            query: () => "/flip-games",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetFlipCardQuery
} = flipCardApi;