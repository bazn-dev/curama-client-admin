import Vue from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';

const UNAUTHORIZED_CODE = 401;

class Api {
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.API_URL,
      headers: {}
    });

    this.axios.interceptors.request.use(
      config => {
        this.setToken(Cookies.get('token'));
        config.headers.Authorization = Cookies.get('token');
        return config;
      }
    );

    this.axios.interceptors.response.use(
      response => {
        const { config, status, statusText } = response;
        Vue.toasted.success(`${config.method.toUpperCase()} ${config.url} ${status} ${statusText}`);
        return response;
      },
      error => {
        let { config, status, statusText } = error.response;

        if (status === UNAUTHORIZED_CODE) {
          window.location = '/auth';
        }

        Vue.toasted.error(`${config.method.toUpperCase()} ${config.url} ${status} ${statusText}`);
        return Promise.reject(error);
      }
    );
  }

  setToken (token) {
    token
      ? this.axios.defaults.headers.common['Authorization'] = token
      : delete this.axios.defaults.headers.common['Authorization'];
  }
}

export default new Api();
