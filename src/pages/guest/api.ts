import { callAPI } from '@/shared/api';

export const requestChannelInfo = async (link: string) => {
  return callAPI.serverSide
    .post<Channel.Info>(
      '/channel/info',
      { link },
      {
        headers: {
          'X-Bypass-Authorization': true,
        },
      },
    )
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel info:', res.data);
      }

      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('channel info error:', err.response?.data);
      }

      return null;
    });
};

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

export const guestSignUp = async () => {
  return callAPI.clientSide
    .post('/guest/signup', {
      headers: {
        'X-Bypass-Authorization': true,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== 'development') {
        console.log(err);
      }
    });
};
