import axios from 'axios';
import { ROOT_URI, API_TIMEOUT } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const handleError = error => {
  console.log('error in handleError', error);
  return Promise.reject();
};

const sendRequest = ({ url, method, params, data }) =>
  instance({
    url,
    method,
    params,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || '',
    },
  })
    .then(response => response.data)
    .catch(error => handleError(error));

export const get = ({ url, params }) =>
  sendRequest({ url, params, method: 'GET' });

export const post = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'POST' });

export const put = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'PUT' });

export const deleteData = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'DELETE' });
