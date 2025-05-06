import { createSlice } from "@reduxjs/toolkit";


const initialState={
    currentUser:null
}
const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        signIn:(state, action)=>{
            state.currentUser= action.payload.name
            //console.log(state.currentUser,'store')
        },
        logOut:(state, action)=>{
            state.currentUser= null
        }
    }
})

export const userActions= userSlice.actions
export default userSlice

