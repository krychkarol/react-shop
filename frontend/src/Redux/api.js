import { publicReq } from "../request";
import { getProductsFail, getProductsRequest, getProductsSuccess } from "./productRedux";
import { loginFail, loginRequest, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginRequest());
    try{
        const res = await publicReq.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFail());
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductsRequest());
    try{
        const res = await publicReq.get("products");
        dispatch(getProductsSuccess(res.data));
    }catch(err){
        dispatch(getProductsFail());
    }
};