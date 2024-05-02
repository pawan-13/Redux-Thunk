import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProduct = createAsyncThunk('fetchProduct', async(_,{rejectWithValue})=>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return rejectWithValue(error);
    }
})
 const product = createSlice({
    name : 'product',
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProduct.pending((state)=>{
            state.isLoading = true;
        }));
        builder.addCase(fetchProduct.fulfilled((state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }));
        builder.addCase(fetchProduct.rejected((state,action)=>{
            console.log('error',action.payload);
            state.isError = true;            
        }))
    }
});

export default product.reducer;