import { createSlice } from '@reduxjs/toolkit';

const sliderSlice = createSlice({
    name: "slider",
    initialState:{
        slides: [],
        fetching: false,
        error: false
    },
    reducers:{
        //GET
        getSliderRequest:(state) => {
            state.fetching = true;
        },
        getSliderSuccess:(state, action) => {
            state.fetching = false;
            state.slides = action.payload;
        },
        getSliderFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //DELETE
        deleteSliderRequest:(state) => {
            state.fetching = true;
        },
        deleteSliderSuccess:(state, action) => {
            state.fetching = false;
            state.slides.splice(state.slides.findIndex(item => item._id === action.payload), 1 );
        },
        deleteSliderFail:(state) => {
            state.fetching = false;
            state.error = true;
        },

        //UPDATE
        updateSliderRequest:(state) => {
            state.fetching = true;
        },
        updateSliderSuccess:(state, action) => {
            state.fetching = false;
            state.slides[state.slides.findIndex(item => item._id === action.payload.id)] = action.payload.slide;
        },
        updateSliderFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
        
        //CREATE
        createSliderRequest:(state) => {
            state.fetching = true;
        },
        createSliderSuccess:(state, action) => {
            state.fetching = false;
            state.slides.push(action.payload);
        },
        createSliderFail:(state) => {
            state.fetching = false;
            state.error = true;
        },
    }
})

export const  { getSliderRequest, getSliderSuccess, getSliderFail,
                deleteSliderRequest, deleteSliderSuccess, deleteSliderFail,
                updateSliderRequest, updateSliderSuccess, updateSliderFail,
                createSliderRequest, createSliderSuccess, createSliderFail,
              } = sliderSlice.actions;
export default sliderSlice.reducer;