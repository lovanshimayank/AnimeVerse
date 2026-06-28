import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
  },

  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },

    addToCart: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.product?._id === action.payload._id,
      );

      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({
          product: action.payload,

          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload,
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.product._id === action.payload,
      );

      if (item) item.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.product._id === action.payload,
      );

      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
