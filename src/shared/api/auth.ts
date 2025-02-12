import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/client'
    : process.env.SERVER_SIDE_FETCH_URL;

const auth = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const post = async <Response, RequestBody>(
  url: string,
  data: RequestBody,
) => {
  return auth.post<Response>(url, data);
};
