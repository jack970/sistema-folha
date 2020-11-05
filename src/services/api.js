import axios from 'axios'
import { getToken, getRefresh, login } from "./auth";

const url = axios.create({
    baseURL: 'http://localhost:3001'
})

url.interceptors.response.use(async response => {
  return response
}, 
  function(error) {
      const originalRequest = error.config
      const refreshToken = getRefresh()

      originalRequest._retry = true;
      if (error.response.status === 403 && !originalRequest.__retry) {

        originalRequest._retry = true;
        return url.post('/token', {
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

url.interceptors.request.use(async config => {
    const token = getToken();
    const refreshToken = getRefresh()
    if (token && refreshToken) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default {
  SignIn: (inputs) => {
    const json = url.post("login", inputs)
      .then(response => {
        return response.data
    })
    return json
  },

  InfoPainel: () => {
    const json = url.get("painel")
        .then(response => {
          return response.data
        }).catch(error => {
          return error
    })
    return json
  },

  PegaContraCheque: (inputs) => {
    const json = url.post("contra-cheque", inputs)
      .then(response => {
          return response.data
      }).catch(error => {
          return "Ocorreu algum erro na busca!"  
    })
    return json
  }
}