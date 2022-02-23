import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        cartQty: 0,
        total: 0
    },
    reducers:{
        addProduct: (state, action) => {
            state.cartQty += 1;
            state.products.push(action.payload);
            state.total = parseFloat((state.total + (action.payload.price * action.payload.qty)).toFixed(2));
        },
        addQty: (state, action) => {
            state.products[state.products.findIndex(item => item._id === action.payload)].qty += 1;
            state.total = parseFloat((state.total + state.products[state.products.findIndex(item => item._id === action.payload)].price).toFixed(2));
        },
        removeQty: (state, action) => {
            state.products[state.products.findIndex(item => item._id === action.payload)].qty -= 1;
            state.total = parseFloat((state.total - state.products[state.products.findIndex(item => item._id === action.payload)].price).toFixed(2));
        },
        deleteProduct: (state, action) => {
            state.total = parseFloat((state.total - (state.products[state.products.findIndex(item => item._id === action.payload)].price * state.products[state.products.findIndex(item => item._id === action.payload)].qty)).toFixed(2));
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1 );
            state.cartQty -= 1;
        },
        clearCart: (state) => {
            state.products = [];
            state.cartQty = 0;
            state.total = 0;
        }

    }
})

export const { addProduct, addQty, removeQty, deleteProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;