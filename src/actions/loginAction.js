import { DO_LOGIN, FAIL_LOGIN } from "./actionTypes";

import { setStorage, setParams } from "../component/utility";
import { reset } from "redux-form";
import { LOGIN_FORM } from "../component/Login/functions";
import axiosInstance from "../config/interceptor";

//Login Action
export const DoLogin = (values, callback) => {
  return function(dispatch) {
    axiosInstance
      .post("doLogin" + setParams(values))
      .then(res => {
        //If User click on keep me login then data will store in Asyncstorage

        //Check input mobile number  with jsondata

        if (
          values.mobileNo !== res.data.authentication.personalProfile.mobileNo
        ) {
          res.data.success = false;
        } else {
          res.data.success = true;
          setStorage("currentUser", res.data); //set data in local storage
        }

        callback(res); //callback for submit handling
        dispatch({
          type: DO_LOGIN,
          payload: res.data
        });
      })
      .catch(error => {
        const data = {};
        data.connection = true;
        callback(data);
        dispatch({ type: FAIL_LOGIN, payload: data });
      });
  };
};

//Reset login Form

export const resetLoginForm = () => {
  return function(dispatch) {
    dispatch(reset(LOGIN_FORM)); // requires form name
  };
};
