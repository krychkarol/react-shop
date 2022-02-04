import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState:{
        products: [],
        fetching: false,
        error: false
    },
    reducers:{
        getProductsRequest:(state) => {
            state.fetching = true;
        },
        getProductsSuccess:(state, action) => {
            state.fetching = false;
            state.products = action.payload;
        },
        getProductsFail:(state) => {
            state.fetching = false;
            state.error = true;
        }
    }
})

export const { getProductsRequest, getProductsSuccess, getProductsFail } = productSlice.actions;
export default productSlice.reducer;