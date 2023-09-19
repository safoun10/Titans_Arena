import baseApi from "../api/baseApi";

const socialLinks = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSocialLinks: builder.query({
            query: () => "/social-links",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetSocialLinksQuery
} = socialLinks;