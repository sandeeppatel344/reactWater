import axiosInstance from "../config/interceptor";
import { setParams, getStorage } from "../component/utility";

export const doLogout = async callback => {
  const data = await getStorage("currentUser");

  let val = {
    mobileNo: data.authentication.personalProfile.mobileNo
  };

  axiosInstance
    .post("doLogout" + setParams(val))
    .then(res => callback(res))
    .catch(err => alert(err));
};
