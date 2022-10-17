import { createSlice } from "@reduxjs/toolkit";

export const postSlice=createSlice({
    name:"userData",
    initialState:{
        posts:[{name:'deb',email:'cvfvre',gender:'male',status:'active'}]
    },
    reducers:{
        set_single_user:(state,action)=>{
            state.posts=[action.payload]
            // console.log(action.payload)
            return state
        }
    }
})
export const{set_single_user}=postSlice.actions;

export default postSlice.reducer;