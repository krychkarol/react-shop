import { publicReq } from "../request";
import { loginFail, loginRequest, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginRequest());
    try{
        const res = await publicReq.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFail());
    }
}