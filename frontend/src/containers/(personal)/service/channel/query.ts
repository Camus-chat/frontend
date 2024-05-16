import type {
  Channel,
  ChannelCreate,
} from '@/containers/(personal)/service/channel/type';
import { query } from '@/containers/query';

export const getChannels = async () => {
  return query.serverSide.get<Channel[]>('/channel/list');
};

export const createChannel = async (request: ChannelCreate) => {
  await query.clientSide
    .post<Channel, ChannelCreate>('/channel/create', request)
    .then((res) => {
      console.log(res);
      return res;
    });
};
