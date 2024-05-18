import { query } from '@/containers/query';
import LocalStorage from '@/hooks/LocalStorage';

const guestSignup = async () => {
  return query.serverSide.get('/guest/signup');
};

const guestLogin = async () => {
  return query.serverSide.get<Token>('/guest/login').then((res) => {
    LocalStorage.setItem('accessToken', res.accessToken);
  });
};

export const requestGuestProfile = async () => {
  const token = LocalStorage.getItem('accessToken');
  if (!token) {
    const isSignedUp = await guestSignup();
    if (isSignedUp) {
      await guestLogin();
    }
  }
  return query.serverSide.get<GuestProfile>('/guest/profile');
};

export const requestChannelInfo = async (link: string) => {
  return query.serverSide
    .post<ChatRoomInfo, string>('/guest/channel-info', link)
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const requestEnterRoom = async (link: string) => {
  return query.clientSide
    .post<string, string>('/room/guest/enter', link)
    .then((res) => {
      return res;
    });
};
