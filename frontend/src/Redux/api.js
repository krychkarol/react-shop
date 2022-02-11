import { publicReq, userReq } from "../request";
import {
    createProductsFail, createProductsRequest, createProductsSuccess,
    deleteProductsFail, deleteProductsRequest, deleteProductsSuccess,
    getProductsFail, getProductsRequest, getProductsSuccess,
    updateProductsFail, updateProductsRequest, updateProductsSuccess,
    } from "./productRedux";
import {
    loginFail, loginRequest, loginSuccess,
    logoutFail, logoutRequest, logoutSuccess,
    } from "./userRedux"

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
        const res = await userReq.delete("products/"+ id);
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