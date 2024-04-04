import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    updateProductQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateProductQuantity } =
  cartSlice.actions;
