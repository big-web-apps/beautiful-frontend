import axios from 'axios';

export const API_URL = 'http://194.58.90.132/';

export const $api = axios.create({
  headers: {
    //'Access-Control-Allow-Credentials': '*',
  },
});
