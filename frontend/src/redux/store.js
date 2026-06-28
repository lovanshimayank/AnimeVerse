import { configureStore } from "@reduxjs/toolkit";

import animeReducer from "./slices/animeSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});