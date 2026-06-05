import api from "./api";

import {
  getAccessToken,
  setAccessToken,
  clearAccessToken
} from "../utils/tokenService";

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    
    console.log("calling /refresh-token")
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.get("/refresh-token");

        setAccessToken(res.data.accessToken);
        return api(originalRequest);

      } catch (error) {
        clearAccessToken();
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(err);
  }
);

export default api;