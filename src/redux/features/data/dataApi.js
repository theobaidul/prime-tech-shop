import apiSlice from '../api/apiSlice';
import {
  storeFilterMaxPrice,
  storeFilterMinPrice,
} from '../filter/filterSlice';
import {
  storeBrands,
  storeCategories,
  storeMaxPrice,
  storeMinPrice,
  storeProducts,
} from './dataSlice';

const dataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
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
          dispatch(storeFilterMinPrice(minPrice));
          dispatch(storeFilterMaxPrice(maxPrice));
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
export default dataApi;
