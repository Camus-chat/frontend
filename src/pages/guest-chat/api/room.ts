import { callAPI } from '@/shared/api';

export const requestRoomInfo = async (link: string, roomId: string) => {
  return callAPI.serverSide
    .post<ChattingRoom>('/room/info', { link, roomId })
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('room Info:', res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('room Info:', err.response?.data);
      }
      return null;
    });
};
