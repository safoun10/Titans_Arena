import baseApi from "../api/baseApi";

const matchDetails = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMatchDetails: builder.query({
            query: (id) => `/espMatchFixered/${id}`,
            invalidatesTags: ["invalidCache"],
        }),
    }),
});

export const {
    useGetMatchDetailsQuery,
} = matchDetails;