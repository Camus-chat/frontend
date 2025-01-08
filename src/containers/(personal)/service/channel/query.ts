import { revalidateTag } from 'next/cache';

import type {
  Channel,
  ChannelCreate,
  ChannelUpdate,
} from '@/containers/(personal)/service/channel/type';
import { query } from '@/containers/query';

const CHANNEL_LIST_TAG = 'channel-list';

export const getChannels = async () => {
  revalidateTag(CHANNEL_LIST_TAG);
  return query.serverSide.get<Channel[]>('/channel/list', CHANNEL_LIST_TAG);
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
