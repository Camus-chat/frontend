import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/client'
    : process.env.SERVER_SIDE_FETCH_URL;

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const get = async <Response>(url: string) => {
  return client.get<Response>(url);
};

export const post = async <Response, RequestBody>(
  url: string,
  data: RequestBody,
) => {
  return client.post<Response>(url, data);
};
