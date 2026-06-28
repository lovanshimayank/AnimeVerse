import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlistItems: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlistItems.find(
        item => item._id === action.payload._id
      );

      if (!exists) {
        state.wishlistItems.push(action.payload);
      }
    },
    moveToCart: (state, action)=>{

state.wishlistItems =
state.wishlistItems.filter(
item => item._id !== action.payload._id
);


},

    removeFromWishlist: (state, action) => {
      state.wishlistItems =
        state.wishlistItems.filter(
          item => item._id !== action.payload
        );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  moveToCart
} = wishlistSlice.actions;

export default wishlistSlice.reducer;