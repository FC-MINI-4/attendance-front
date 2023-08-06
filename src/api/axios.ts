import axios, { AxiosError } from 'axios';

const apiIP = process.env.NEXT_PUBLIC_API_IP;
const clientPort = process.env.NEXT_PUBLIC_API_CLIENT_PORT;
const adminPort = process.env.NEXT_PUBLIC_API_ADMIN_PORT;

const clientUrl = `http://${apiIP}:${clientPort}`;
const adminUrl = `http://${apiIP}:${adminPort}`;

export const clientInstance = axios.create({
  baseURL: `${clientUrl}`
});

export const adminInstance = axios.create({
  baseURL: `${adminUrl}`
});

clientInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

clientInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error.response?.data);
  }
);

adminInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

adminInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error.response?.data);
  }
);
