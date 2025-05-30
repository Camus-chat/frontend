'use client';

import axios from 'axios';

import { FILTERING_API_BASE_URL } from '@/shared/config';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/filtering'
    : FILTERING_API_BASE_URL;

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchFilteringPrediction = async (text: string) => {
  return client.post('/predict', { text }).then((res) => {
    const { prediction } = res.data;
    console.debug('prediction:', prediction);
    return prediction === 2;
  });
};
