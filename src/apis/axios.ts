import axios from 'axios';
import { API_END_POINT } from './environment';

const API = () => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    timeout: 1000,
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  return instance;
};

const request = API();
export default request;
