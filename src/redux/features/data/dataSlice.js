import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: [],
  brands: [],
  minPrice: 0,
  maxPrice: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      state.products = action.payload;
    },
    storeCategories: (state, action) => {
      state.categories = action.payload;
    },
    storeBrands: (state, action) => {
      state.brands = action.payload;
    },
    storeMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    storeMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const {
  storeBrands,
  storeCategories,
  storeProducts,
  storeMaxPrice,
  storeMinPrice,
} = dataSlice.actions;
