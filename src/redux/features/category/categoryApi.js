import apiSlice from '../api/apiSlice';

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: '/products/categories',
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
export default categoryApi;
