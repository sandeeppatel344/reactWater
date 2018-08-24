import axiosInstance from "../../../config/interceptor";
import { setParams } from "../../utility";

export const generateOTP = (val, callback) => {
  axiosInstance
    .post("generateOTP" + setParams(val))
    .then(res => callback(res))
    .catch(err => {
      alert(err);
    });
};

export const sendOTP = (val, callback) => {
  axiosInstance
    .post("sendOTP" + setParams(val))
    .then(res => callback(res))
    .catch(err => {
      alert(err);
    });
};
