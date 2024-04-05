import apiSlice from '../api/apiSlice';

const productApi = apiSlice.injectEndpoints({
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
    searchProducts: builder.query({
      query: (searchTerm) => ({
        url: `/products/search?q=${searchTerm}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useLazySearchProductsQuery,
} = productApi;
export default productApi;
