import { query } from '@/containers/query';

export const requestChannelInfo = async (link: string) => {
  return query.serverSide
    .post<ChatRoomInfo, string>('/guest/channel-info', link)
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const requestGuestProfile = async () => {
  return query.serverSide.get<GuestProfile>('/guest/profile').then((res) => {
    return res;
  });
};

export const requestEnterRoom = async (link: string) => {
  return query.clientSide
    .post<EnterRoom, string>('/room/guest/enter', link)
    .then((res) => {
      localStorage.setItem('accessToken', res.accessToken);
      return res.roomId;
    });
};

const guestSignup = async () => {
  return query.serverSide.get('/guest/signup');
};

export const guestLogin = async () => {
  const response = await guestSignup();
  return response ? query.clientSide.get('/guest/login') : console.log('error');
};
