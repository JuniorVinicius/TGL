import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const isToken = localStorage.getItem('token');

    if (isToken) {
      config.headers!.Authorization = `Bearer ${isToken}`;
    }

    return config;
  },
  function (error: AxiosError) {
    console.log('error :>> ', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(async (response) => {
  if(response.status === 200 && response.config.method === 'post'){
    localStorage.setItem('token', response.data.token.token)
  }

  return response;
}, function (error: AxiosError){
    console.log('error :>> ', error);
    if (error.response){
        const handleError = error.response
        return Promise.reject(handleError)
    }
    return Promise.reject(error)
});

export default instance;
