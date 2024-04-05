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
} = productsApi;
export default productsApi;
