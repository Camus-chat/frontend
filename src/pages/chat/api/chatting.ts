import { callAPI } from '@/shared/api';

export const requestChattingList = async () => {
  return callAPI.serverSide
    .get<ChattingRoom.RawData[]>('/room/list')
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('room list:', res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('room list:', err.response?.data);
      }
      throw new Error('채팅 목록을 불러오는데 실패했습니다.');
    });
};
