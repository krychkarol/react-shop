import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: "users",
    initialState:{
        users: [],
        fetching: false,
        error: false
    },
    reducers:{
        //GET
       getUsersRequest:(state) => {
            state.fetching = true;
        },
       getUsersSuccess:(state, action) => {
            state.fetching = false;
            state.users = action.payload;
        },
       getUsersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //DELETE
        deleteUsersRequest:(state) => {
            state.fetching = true;
        },
        deleteUsersSuccess:(state, action) => {
            state.fetching = false;
            state.users.splice(state.users.findIndex(item => item._id === action.payload), 1 );
        },
        deleteUsersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //UPDATE
        updateUsersRequest:(state) => {
            state.fetching = true;
        },
        updateUsersSuccess:(state, action) => {
            state.fetching = false;
            state.users[state.users.findIndex(item => item._id === action.payload.id)] = action.payload.user;
        },
        updateUsersFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
    }
})

export const  {getUsersRequest,getUsersSuccess,getUsersFail,
                deleteUsersRequest, deleteUsersSuccess, deleteUsersFail,
                updateUsersRequest, updateUsersSuccess, updateUsersFail,
              } = usersSlice.actions;
export default usersSlice.reducer;