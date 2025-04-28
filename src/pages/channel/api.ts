import { callAPI } from '@/shared/api';

export const getChannels = async () => {
  return callAPI.serverSide
    .get<Channel[]>('/channel/list')
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel list:', res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel list:', err.response?.data);
      }
      return null;
    });
};

export const createChannel = async (
  request: ChannelCreateRequest,
): Promise<Channel | null> => {
  return callAPI.clientSide
    .post('/channel/create', request)
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel create:', res.data);
      }
      return res.data as Channel;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('channel create:', err.response?.data);
      }
      return null;
    });
};
