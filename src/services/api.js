import axios from "axios";

const api = axios.create({
  baseURL: "https://ecomm-backend-1-9fod.onrender.com/api",
});

export default api;