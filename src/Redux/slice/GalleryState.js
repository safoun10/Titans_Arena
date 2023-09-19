import baseApi from "../api/baseApi";

const galleryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGallery: builder.query({
            query: () => "/blogs/64f2c74b99376762899a529d",
        }),
        invalidatesTags: ["invalidCache"],
    }),
});

export const {
    useGetGalleryQuery
} = galleryApi;