import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "order",
    initialState:{
        orders: [],
        fetching: false,
        error: false
    },
    reducers:{
        //GET
        getOrdersRequest:(state) => {
            state.fetching = true;
        },
        getOrdersSuccess:(state, action) => {
            state.fetching = false;
            state.orders = action.payload;
        },
        getOrdersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //DELETE
        deleteOrdersRequest:(state) => {
            state.fetching = true;
        },
        deleteOrdersSuccess:(state, action) => {
            state.fetching = false;
            state.orders.splice(state.orders.findIndex(item => item._id === action.payload), 1 );
        },
        deleteOrdersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //UPDATE
        updateOrdersRequest:(state) => {
            state.fetching = true;
        },
        updateOrdersSuccess:(state, action) => {
            state.fetching = false;
            state.orders[state.orders.findIndex(item => item._id === action.payload.id)] = action.payload.order;
        },
        updateOrdersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
    }
})

export const  { getOrdersRequest, getOrdersSuccess, getOrdersFail,
                deleteOrdersRequest, deleteOrdersSuccess, deleteOrdersFail,
                updateOrdersRequest, updateOrdersSuccess, updateOrdersFail,
              } = productSlice.actions;
export default productSlice.reducer;