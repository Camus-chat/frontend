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
    // localStorage.setItem('accessToken', res.accessToken);
    // TODO: cookie 에 refreshToken 저장
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
