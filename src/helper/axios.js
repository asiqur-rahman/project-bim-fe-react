
import axios from 'axios';
import {getToken,getRefreshToken} from './common';
import {
  HTTP_STATUS_TOKEN_EXPIRE,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL_SERVER,
  HTTP_STATUS_OK,
  HTTP_STATUS_NOT_FOUND,
  BASE_URL
} from './constant';
const UUID = require('uuid-int');

const generator = UUID(511);

const getErrorText = (status) => {
  switch (status) {
    case 400:
      return HTTP_STATUS_BAD_REQUEST;
    case 401:
      return HTTP_STATUS_TOKEN_EXPIRE;
    case 404:
      return HTTP_STATUS_NOT_FOUND;
    case 409:
      return HTTP_STATUS_CONFLICT;
    case 500:
      return HTTP_STATUS_INTERNAL_SERVER;
    default:
      return '';
  }
};

let instance = axios.create({
  baseURL: BASE_URL+"/api",
})

// request header
instance.interceptors.request.use(
  (config) => {
    const token=getToken();
    config.headers = {"Access-Control-Allow-Origin": "*"}
    if(token)config.headers = {"Authorization": `Bearer ${token}`}
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

  
// response parse
instance.interceptors.response.use(
  (response) => {
    const apiResponse = {
      data: response.data,
      status: response.status,
      statusText: HTTP_STATUS_OK,
      headers: response.headers,
      config: response.config,
      message: response.data?.message,
      success: true
    };
    return apiResponse;
  },

  (error) => {
    if (error &&
      error?.response &&
      error?.response?.status === 401) {
      getRefreshToken();
    }
    const apiError = {
      data: null,
      status: error.status,
      statusText: getErrorText((error?.status) ?? 500),
      headers: error.headers,
      config: error.config,
      message: error.data?.message,
      success: false
    };
    return apiError;
});

export default instance;