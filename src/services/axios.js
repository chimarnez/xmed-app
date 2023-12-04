import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://xmed.life",
  // baseURL: "http://localhost:3000",
});

export default axiosInstance;
