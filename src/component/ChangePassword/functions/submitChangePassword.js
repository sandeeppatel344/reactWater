import axiosInstance from "../../../config/interceptor";
import { setParams, getStorage } from "../../utility";

export const SubmitChangePassword = async (values, callback) => {
  //here write http logic

  const data = await getStorage("currentUser");

  let val = {
    ...values,
    mobileNo: data.authentication.personalProfile.mobileNo
  };

  axiosInstance
    .post("changePassword" + setParams(val))
    .then(res => callback(res))
    .catch(err => {
      alert(err);
    });
};
