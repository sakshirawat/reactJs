import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[]
}
const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:initialState,
    reducers:{
        addtoWishlist:(state, action)=>{
           state.items.push(action.payload)
        },
        removeFromWishlist:(state, action)=>{
            state.items = state.items.filter(item => item.title !== action.payload.title);
        }
    }
})

export const wishlistActions= wishlistSlice.actions
export default wishlistSlice