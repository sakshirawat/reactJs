import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

// Configure the Redux store by combining multiple slice reducers
const store = configureStore({
  reducer: {
    // User slice manages user-related state (e.g., authentication, profile)
    user: userSlice.reducer,

    // Wishlist slice manages items added to the user's wishlist
    wishlist: wishlistSlice.reducer,

    // Cart slice manages items added to the shopping cart
    cart: cartSlice.reducer,
  },
});

// Export the configured store to be provided to the React app
export default store;
