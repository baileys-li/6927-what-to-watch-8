import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { EndPoint } from '../const';
import { getToken } from './token';

const REQUEST_TIMEOUT = 5000;

const enum HttpCode {
  Unauthorized = 401,
  BadRequest = 400,
}

type UnauthorizedCallback = () => void;

export const createAPI = (
  onUnauthorized: UnauthorizedCallback,
): AxiosInstance => {
  const api = axios.create({
    baseURL: EndPoint.Base,
    timeout: REQUEST_TIMEOUT,
  });


  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
