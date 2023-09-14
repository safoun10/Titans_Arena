import baseApi from "../api/baseApi";

const teamMembersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => "/team-members",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetTeamMembersQuery
} = teamMembersApi;