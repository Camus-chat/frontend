import { callAPI } from '@/shared/api';

export const requestChannelInfo = async (link: string) => {
  return callAPI.serverSide
    .post<Channel.Info>(
      '/channel/info',
      { link },
      {
        headers: {
          'X-Bypass-Authorization': true,
        },
      },
    )
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel info:', res.data);
      }

      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel info error:', err.response?.data);
      }

      return null;
    });
};
