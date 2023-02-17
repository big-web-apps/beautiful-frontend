import axios from 'axios';

export const API_URL = 'https://api.punkapi.com/v2';

export const $api = axios.create({
  headers: {
    'Access-Control-Allow-Credentials': '*',
  },
});
