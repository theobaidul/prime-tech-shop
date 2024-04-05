import apiSlice from '../api/apiSlice';
import {
  storeBrands,
  storeCategories,
  storeMaxPrice,
  storeMinPrice,
  storeProducts,
} from './productSlice';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products?skip=0&limit=100',
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const response = await queryFulfilled;
          const products = response?.data?.products;
          const categories = new Set();
          const brands = new Set();
          let minPrice = 0;
          let maxPrice = 0;

          products.forEach((product) => {
            const { category, brand, price } = product || {};
            categories.add(category);
            brands.add(brand);
            minPrice = Math.min(minPrice, price);
            maxPrice = Math.max(maxPrice, price);
          });

          dispatch(storeProducts(products));
          dispatch(storeCategories([...categories]));
          dispatch(storeBrands([...brands]));
          dispatch(storeMinPrice(minPrice));
          dispatch(storeMaxPrice(maxPrice));
        } catch (error) {
          //
        }
      },
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
