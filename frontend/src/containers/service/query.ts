import { api } from '@/containers/query';

interface RoomInfo {
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

export const postCreateChannel = async (channelInfo: RoomInfo) => {
  try {
    const response = await api.post<channel, RoomInfo>(
      false,
      '/channel/create',
      channelInfo,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
