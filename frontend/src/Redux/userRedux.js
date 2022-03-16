import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: {_id: "guest"},
        fetching: false,
        error: false
    },
    reducers:{
        //LOGIN
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
        },

        //LOGOUT
        logoutRequest:(state) => {
            state.fetching = true;
        },
        logoutSuccess:(state) => {
            state.fetching = false;
            state.currentUser = {_id: "guest"};
        },
        logoutFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
        
    }
})

export const  { loginRequest, loginSuccess, loginFail,
                logoutRequest, logoutSuccess, logoutFail
              } = userSlice.actions;
export default userSlice.reducer;