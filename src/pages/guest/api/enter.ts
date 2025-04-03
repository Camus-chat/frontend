import { callAPI } from '@/shared/api';

export const requestEnterChatting = async (link: string) => {
  return callAPI.clientSide
    .post<ChattingRoom.Info['roomId']>('/room/enter', link)
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('chatting room:', res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('enter chatting error:', err.response?.data);
      }
      return null;
    });
};
