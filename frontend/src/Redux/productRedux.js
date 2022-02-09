import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState:{
        products: [],
        fetching: false,
        error: false
    },
    reducers:{
        //GET
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
        },

        //DELETE
        deleteProductsRequest:(state) => {
            state.fetching = true;
        },
        deleteProductsSuccess:(state, action) => {
            state.fetching = false;
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1 );
        },
        deleteProductsFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //UPDATE
        updateProductsRequest:(state) => {
            state.fetching = true;
        },
        updateProductsSuccess:(state, action) => {
            state.fetching = false;
            state.products[state.products.findIndex(item => item._id === action.payload.id)] = action.payload.product;
        },
        updateProductsFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
        
        //CREATE
        createProductsRequest:(state) => {
            state.fetching = true;
        },
        createProductsSuccess:(state, action) => {
            state.fetching = false;
            state.products.push(action.payload);
        },
        createProductsFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
    }
})

export const  { getProductsRequest, getProductsSuccess, getProductsFail,
                deleteProductsRequest, deleteProductsSuccess, deleteProductsFail,
                updateProductsRequest, updateProductsSuccess, updateProductsFail,
                createProductsRequest, createProductsSuccess, createProductsFail,
              } = productSlice.actions;
export default productSlice.reducer;