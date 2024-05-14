import type { Channel } from '@/containers/(personal)/service/channel/type';
import { query } from '@/containers/query';

export const getChannels = async () => {
  return query.serverSide.get<Channel[]>('/channel/list');
};
