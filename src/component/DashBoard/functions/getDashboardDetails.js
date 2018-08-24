import axiosInstance from "../../../config/interceptor";
import { getStorage, setParams } from "../../utility";

import { serverErrorhandler } from "../../common/ServerErrorHandling";

export const getDashboardDetails = async callback => {
  const data = await getStorage("currentUser");

  let val = {
    consumerNo: data.authentication.personalProfile.consumerNo
  };

  axiosInstance
    .get("getUserDashboardDetails" + setParams(val))
    .then(res => callback(res))
    .catch(err => {
       serverErrorhandler();
      //  callback(422);
    });
};
