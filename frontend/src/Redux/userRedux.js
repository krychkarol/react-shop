import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        fetching: false,
        error: false
    },
    reducers:{
        loginRequest:(state) => {
            state.fetching = true;
        },
        loginSuccess:(state, action) => {
            state.fetching = false;
            state.currentUser = action.payload;
        },
        loginFail:(state) => {
            state.fetching = false;
            state.error = true;
        }
    }
})

export const { loginRequest, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;