import apiSlice from '../api/apiSlice';

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: `/products?${query || ''}`,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
export default productsApi;
