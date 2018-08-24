import axiosInstance from "../../../config/interceptor";
import { setParams } from "../../utility";

export const resetPassword = (val, callback) => {
  axiosInstance
    .post("resetPassword" + setParams(val))
    .then(res => callback(res))
    .catch(err => alert(err));
};
