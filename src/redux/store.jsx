import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./slice"

export const store=configureStore({
    reducer:{
        post:postSliceReducer,
    }
})