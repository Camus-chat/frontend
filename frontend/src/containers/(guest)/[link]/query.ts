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

export const geustSignup = async () => {
  const link = '';
  return query.serverSide.post<string, string>('/guest/signup', link);
};

export const guestLogin = async () => {
  return query.clientSide.get('/guest/login');
};
