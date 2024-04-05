import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import cartSlice from '../features/cart/cartSlice';
import productSlice from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
    data: productSlice,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
