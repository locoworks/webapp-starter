import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Example of setting a default header
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message.includes("500")) {
      console.log("server error!");
    } else if (error.message.includes("403")) {
      console.log("access forbidden error!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
