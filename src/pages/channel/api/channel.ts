import type {
  ChannelCreate,
  ChannelUpdate,
} from '@/containers/(personal)/service/channel/type';
import { query } from '@/containers/query';

export const getChannels = async () => {
  return query.serverSide.get<Channel[]>('/channel/list');
};

export const createChannel = async (request: ChannelCreate) => {
  return query.clientSide
    .post<Channel, ChannelCreate>('/channel/create', request)
    .then((res) => {
      console.log(res);
      return res;
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
