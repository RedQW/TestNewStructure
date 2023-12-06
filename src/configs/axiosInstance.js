import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://64b3906e0efb99d86267ff51.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("🚀 ~ Response in Error (in axiosInstance):", error);
    return Promise.reject(error);
  }
);
export { axiosInstance };
