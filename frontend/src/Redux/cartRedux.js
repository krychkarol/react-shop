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
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;