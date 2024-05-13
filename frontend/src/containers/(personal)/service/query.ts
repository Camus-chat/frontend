import { query } from '@/containers/query';

interface $RoomInfo {
  type: string;
  title: string;
  content: string;
  filterLevel: number;
}

interface channel {
  type: string;
  title: string;
  content: string;
  filterLevel: number;
  link: string;
}

export const createChannel = async (channelInfo: $RoomInfo) => {
  return query
    .post<channel, $RoomInfo>(false, '/channel/create', channelInfo)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
