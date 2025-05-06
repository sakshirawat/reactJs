import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
   reducer:{
        user:userSlice.reducer,
        wishlist:wishlistSlice.reducer,
        cart:cartSlice.reducer
   }
})
export default store