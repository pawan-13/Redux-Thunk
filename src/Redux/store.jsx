import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Feature/Product';
export const store = configureStore({
    reducer : {
        product : productReducer,
    }
});