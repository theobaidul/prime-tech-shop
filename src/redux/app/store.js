import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import cartSlice from '../features/cart/cartSlice';
import dataSlice from '../features/data/dataSlice';
import filterSlice from '../features/filter/filterSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
    data: dataSlice,
    filter: filterSlice,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
