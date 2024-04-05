import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 12,
  categories: [],
  brands: [],
  ratings: [],
  minPrice: 0,
  maxPrice: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    storeFilterPage(state, action) {
      state.page = action.payload;
    },
    storeFilterLimit(state, action) {
      state.limit = action.payload;
    },
    storeFilterCategories(state, action) {
      let categories = state?.categories;
      if (state.categories.includes(action.payload)) {
        categories = state?.categories?.filter(
          (category) => category !== action.payload
        );
      } else {
        categories = [...state.categories, action.payload];
      }
      state.categories = categories;
    },
    storeFilterBrands(state, action) {
      let brands = state?.brands;
      if (state.brands.includes(action.payload)) {
        brands = state?.brands?.filter((brand) => brand !== action.payload);
      } else {
        brands = [...state.brands, action.payload];
      }
      state.brands = brands;
    },
    storeFilterRatings(state, action) {
      let ratings = state?.ratings;
      if (state.ratings.includes(action.payload)) {
        ratings = state?.ratings?.filter((rating) => rating !== action.payload);
      } else {
        ratings = [...state.ratings, action.payload];
      }
      state.ratings = ratings;
    },
    storeFilterMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    storeFilterMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  storeFilterBrands,
  storeFilterCategories,
  storeFilterLimit,
  storeFilterMaxPrice,
  storeFilterMinPrice,
  storeFilterPage,
  storeFilterRatings,
} = filterSlice.actions;
