import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: {_id: "guest"},
        fetching: false,
        error: false,
        reg: false,
    },
    reducers:{
        //LOGIN
        loginRequest:(state) => {
            state.fetching = true;
        },
        loginSuccess:(state, action) => {
            state.fetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //LOGOUT
        logoutRequest:(state) => {
            state.fetching = true;
        },
        logoutSuccess:(state) => {
            state.fetching = false;
            state.currentUser = {_id: "guest"};
            state.error = false;
        },
        logoutFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //REGISTER
        registerRequest:(state) => {
            state.fetching = true;
        },
        registerSuccess:(state) => {
            state.fetching = false;
            state.error = false;
            state.reg = true;
        },
        registerFail:(state, action) => {
            state.fetching = false;
            state.error = action.payload;
        },

        //OTHER
        clearErr:(state) => {
            state.error = false;
            state.reg = false;
        }
    }
})

export const  { loginRequest, loginSuccess, loginFail,
                logoutRequest, logoutSuccess, logoutFail,
                registerRequest, registerSuccess, registerFail,
                clearErr
              } = userSlice.actions;
export default userSlice.reducer;