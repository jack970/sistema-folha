import axios from 'axios'
import { getToken, getRefresh, login } from "./auth";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

api.interceptors.response.use(async response => {
  return response
}, 
function(error) {
    const originalRequest = error.config
    const refreshToken = getRefresh()

    originalRequest._retry = true;
    if (error.response.status === 403 && !originalRequest.__retry) {

      originalRequest._retry = true;
      return api.post('/token', {
                                "token": refreshToken
                      }).then(res => {
                        if (res.status === 200) {
                          login(res.data.accessToken, refreshToken)
                          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
                          return axios(originalRequest)
                        }
                      })
    }
  }
)

api.interceptors.request.use(async config => {
    const token = getToken();
    const refreshToken = getRefresh()
    if (token && refreshToken) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api