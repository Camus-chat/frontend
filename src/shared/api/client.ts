import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/client'
    : process.env.SERVER_SIDE_FETCH_URL;

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
