import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.items = state.items.filter((i) => i.title !== item.title);
    },
    increaseQuantity: (state, action) => {
        const item = state.items.find(item => item.title === action.payload.title);
        if (item) {
          item.quantity++;
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.items.find(item => item.title === action.payload.title);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      },
  }
  
});

export const cartActions = cartSlice.actions;
export default cartSlice;
