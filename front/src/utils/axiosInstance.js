import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.cryptorank.io/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const coincodexAxiosInstance = axios.create({
  baseURL: 'https://coincodex.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
