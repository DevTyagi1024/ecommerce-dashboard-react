import axios from "axios";

const api = axios.create({
  baseURL: "https://ecomm-backend-1-9fod.onrender.com/api",
});

let loadingCallback = null;

export const setLoadingCallback = (callback) => {
  loadingCallback = callback;
};

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (loadingCallback) {
      loadingCallback(true);
    }
    return config;
  },
  (error) => {
    if (loadingCallback) {
      loadingCallback(false);
    }
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    if (loadingCallback) {
      loadingCallback(false);
    }
    return response;
  },
  (error) => {
    if (loadingCallback) {
      loadingCallback(false);
    }
    return Promise.reject(error);
  }
);

export default api;


