import { publicReq, userReq } from "../request";
import {
    createCategoryFail, createCategoryRequest, createCategorysSuccess,
    deleteCategoryFail, deleteCategoryRequest, deleteCategorySuccess, getCategoryFail,
    getCategoryRequest, getCategorySuccess, updateCategoryFail,
    updateCategoryRequest, updateCategorySuccess,
    } from "./categoryRedux";
import {
    deleteOrdersFail, deleteOrdersRequest, deleteOrdersSuccess,
    getOrdersFail, getOrdersRequest, getOrdersSuccess,
    updateOrdersFail, updateOrdersRequest, updateOrdersSuccess
    } from "./orderRedux";
import {
    createProductsFail, createProductsRequest, createProductsSuccess,
    deleteProductsFail, deleteProductsRequest, deleteProductsSuccess,
    getProductsFail, getProductsRequest, getProductsSuccess,
    updateProductsFail, updateProductsRequest, updateProductsSuccess,
    } from "./productRedux";
import {
    createSliderFail, createSliderRequest, createSliderSuccess,
    deleteSliderFail, deleteSliderRequest, deleteSliderSuccess,
    getSliderFail, getSliderRequest, getSliderSuccess, updateSliderFail,
    updateSliderRequest, updateSliderSuccess
    } from "./sliderRedux";
import {
    loginFail, loginRequest, loginSuccess,
    logoutFail, logoutRequest, logoutSuccess,
    } from "./userRedux"
import {
    deleteUsersFail, deleteUsersRequest, deleteUsersSuccess,
    getUsersFail, getUsersRequest, getUsersSuccess,
    updateUsersFail, updateUsersRequest, updateUsersSuccess
    } from "./usersRedux";

//AUTH
export const login = async (dispatch, user) => {
    dispatch(loginRequest());
    try{
        const res = await publicReq.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFail());
    }
};

export const logout = async (dispatch) => {
    dispatch(logoutRequest());
    try{
        dispatch(logoutSuccess());
    }catch(err){
        dispatch(logoutFail());
    }
};

//PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductsRequest());
    try{
        const res = await publicReq.get("products");
        dispatch(getProductsSuccess(res.data));
    }catch(err){
        dispatch(getProductsFail());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductsRequest());
    try{
        //const res = await userReq.delete("products/"+ id);
        await userReq.delete("products/"+ id);
        dispatch(deleteProductsSuccess(id));
    }catch(err){
        dispatch(deleteProductsFail());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductsRequest());
    try{
        const res = await userReq.put("products/"+ id, product);
        dispatch(updateProductsSuccess({id:id, product:res.data}));
    }catch(err){
        dispatch(updateProductsFail());
    }
};

export const createProduct = async (product, dispatch) => {
    dispatch(createProductsRequest());
    try{
        const res = await userReq.post("products/", product);
        dispatch(createProductsSuccess(res.data));
    }catch(err){
        dispatch(createProductsFail());
    }
};

//CATEGORY
export const getCategory = async (dispatch) => {
    dispatch(getCategoryRequest());
    try{
        const res = await publicReq.get("categories");
        dispatch(getCategorySuccess(res.data.sort((a, b) => a.order - b.order)));
    }catch(err){
        dispatch(getCategoryFail());
    }
};

export const deleteCategory = async (id, dispatch) => {
    dispatch(deleteCategoryRequest());
    try{
        //const res = await userReq.delete("categories/"+ id);
        await userReq.delete("categories/"+ id);
        dispatch(deleteCategorySuccess(id));
    }catch(err){
        dispatch(deleteCategoryFail());
    }
};

export const updateCategory = async (id, category, dispatch) => {
    dispatch(updateCategoryRequest());
    try{
        const res = await userReq.put("categories/"+ id, category);
        dispatch(updateCategorySuccess({id:id, category:res.data}));
    }catch(err){
        dispatch(updateCategoryFail());
    }
};

export const createCategory = async (product, dispatch) => {
    dispatch(createCategoryRequest());
    try{
        const res = await userReq.post("categories/", product);
        dispatch(createCategorysSuccess(res.data));
    }catch(err){
        dispatch(createCategoryFail());
    }
};

//SLIDER
export const getSlides = async (dispatch) => {
    dispatch(getSliderRequest());
    try{
        const res = await publicReq.get("slides");
        dispatch(getSliderSuccess(res.data));
    }catch(err){
        dispatch(getSliderFail());
    }
};

export const deleteSlide = async (id, dispatch) => {
    dispatch(deleteSliderRequest());
    try{
        //const res = await userReq.delete("slides/"+ id);
        await userReq.delete("slides/"+ id);
        dispatch(deleteSliderSuccess(id));
    }catch(err){
        dispatch(deleteSliderFail());
    }
};

export const updateSlide = async (id, slide, dispatch) => {
    dispatch(updateSliderRequest());
    try{
        const res = await userReq.put("slides/"+ id, slide);
        dispatch(updateSliderSuccess({id:id, slide:res.data}));
    }catch(err){
        dispatch(updateSliderFail());
    }
};

export const createSlide = async (product, dispatch) => {
    dispatch(createSliderRequest());
    try{
        const res = await userReq.post("slides/", product);
        dispatch(createSliderSuccess(res.data));
    }catch(err){
        dispatch(createSliderFail());
    }
};

//USERS
export const getUsers = async (dispatch) => {
    dispatch(getUsersRequest());
    try{
        const res = await userReq.get("users");
        dispatch(getUsersSuccess(res.data));
    }catch(err){
        dispatch(getUsersFail());
    }
};

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUsersRequest());
    try{
        //const res = await userReq.delete("users/"+ id);
        await userReq.delete("users/"+ id);
        dispatch(deleteUsersSuccess(id));
    }catch(err){
        dispatch(deleteUsersFail());
    }
};

export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUsersRequest());
    try{
        const res = await userReq.put("users/"+ id, user);
        dispatch(updateUsersSuccess({id:id, user:res.data}));
    }catch(err){
        dispatch(updateUsersFail());
    }
};

//ORDERS
export const getOrders = async (dispatch) => {
    dispatch(getOrdersRequest());
    try{
        const res = await userReq.get("orders");
        dispatch(getOrdersSuccess(res.data));
    }catch(err){
        dispatch(getOrdersFail());
    }
};

export const deleteOrder = async (id, dispatch) => {
    dispatch(deleteOrdersRequest());
    try{
        //const res = await userReq.delete("orders/"+ id);
        await userReq.delete("orders/"+ id);
        dispatch(deleteOrdersSuccess(id));
    }catch(err){
        dispatch(deleteOrdersFail());
    }
};

export const updateOrder = async (id, order, dispatch) => {
    dispatch(updateOrdersRequest());
    try{
        const res = await userReq.put("orders/"+ id, order);
        dispatch(updateOrdersSuccess({id:id, order:res.data}));
    }catch(err){
        dispatch(updateOrdersFail());
    }
};
