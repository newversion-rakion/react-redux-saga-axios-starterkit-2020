import axios from 'axios';
import { store } from 'react-notifications-component';
import { ROOT_URI, API_TIMEOUT } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const handleError = error => {
  console.log('hihi', error);
  store.addNotification({
    title: 'Wonderful!',
    message: 'teodosii@react-notifications-component',
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
    },
  });
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
    .catch(error => handleError(error.respond));

export const get = ({ url, params }) =>
  sendRequest({ url, params, method: 'GET' });

export const post = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'POST' });

export const put = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'PUT' });

export const deleteData = ({ url, params, data }) =>
  sendRequest({ url, params, data, method: 'DELETE' });
