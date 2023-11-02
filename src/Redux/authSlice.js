import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user:{},
    userCart:[],
    products:[]
};

export const getProducts = createAsyncThunk('/getproduts',async ()=>{
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products');

        return data;

    } catch (error) {
      console.log(error);  
    }
});


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
            
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload; 
        });
    }
});

export default authSlice.reducer
