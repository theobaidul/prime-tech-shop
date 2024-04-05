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
      state.categories = action.payload;
    },
    storeFilterBrands(state, action) {
      state.brands = action.payload;
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
