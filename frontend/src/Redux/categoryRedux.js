import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: "category",
    initialState:{
        categories: [],
        fetching: false,
        error: false
    },
    reducers:{
        //GET
        getCategoryRequest:(state) => {
            state.fetching = true;
        },
        getCategorySuccess:(state, action) => {
            state.fetching = false;
            state.categories = action.payload;
        },
        getCategoryFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //DELETE
        deleteCategoryRequest:(state) => {
            state.fetching = true;
        },
        deleteCategorySuccess:(state, action) => {
            state.fetching = false;
            state.categories.splice(state.categories.findIndex(item => item._id === action.payload), 1 );
        },
        deleteCategoryFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //UPDATE
        updateCategoryRequest:(state) => {
            state.fetching = true;
        },
        updateCategorySuccess:(state, action) => {
            state.fetching = false;
            state.categories[state.categories.findIndex(item => item._id === action.payload.id)] = action.payload.category;
        },
        updateCategoryFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
        
        //CREATE
        createCategoryRequest:(state) => {
            state.fetching = true;
        },
        createCategorySuccess:(state, action) => {
            state.fetching = false;
            state.categories.push(action.payload);
        },
        createCategoryFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
    }
})

export const  { getCategoryRequest, getCategorySuccess, getCategoryFail,
                deleteCategoryRequest, deleteCategorySuccess, deleteCategoryFail,
                updateCategoryRequest, updateCategorySuccess, updateCategoryFail,
                createCategoryRequest, createCategorysSuccess, createCategoryFail,
              } = categorySlice.actions;
export default categorySlice.reducer;