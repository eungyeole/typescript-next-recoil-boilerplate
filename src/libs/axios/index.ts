import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
});
instance.interceptors.request.use(
    function (config : AxiosRequestConfig) {
        return config;
    }, 
    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response : AxiosResponse) {
        return response;
    },

    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
export default instance;