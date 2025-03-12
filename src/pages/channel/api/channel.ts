import type { ChannelUpdate } from '@/containers/(personal)/service/channel/type';
import { query } from '@/containers/query';
import { callAPI } from '@/shared/api';

export const getChannels = async () => {
  return query.serverSide.get<Channel[]>('/channel/list');
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

export const updateChannel = async (request: ChannelUpdate) => {
  await query.clientSide
    .patch<Channel, ChannelUpdate>('/channel/edit', request)
    .then((res) => {
      console.log(res);
      return res;
    });
};
