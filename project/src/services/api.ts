import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { EndPoint } from '../const';

const REQUEST_TIMEOUT = 5000;

const enum HttpCode {
  Unauthorized = 401,
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
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  return api;
};
