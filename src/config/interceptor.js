import axios from "axios";
import { BASE_URL } from "./urlconfig";

// Add a request interceptor
let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;

axiosInstance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  response => Promise.resolve(response),
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
