import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://xmed.life/api",
});

export default axiosInstance;
