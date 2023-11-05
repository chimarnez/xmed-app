import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://xmed.life",
});

export default axiosInstance;
