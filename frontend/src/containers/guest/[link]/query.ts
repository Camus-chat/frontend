import { query } from '@/containers/query';
import LocalStorage from '@/hooks/LocalStorage';

const guestSignup = async () => {
  return query.serverSide.get<Account>('/guest/signup').then((res) => {
    console.log(res);
    return res;
  });
};

const guestLogin = async (account: Account) => {
  return query.serverSide
    .post<{ role: string }, Account>('/guest/login', account)
    .then((res) => {
      return res.role.length > 0;
    });
};

export const requestGuestProfile = async () => {
  const token = LocalStorage.getItem('accessToken');
  if (!token) {
    const account = await guestSignup();
    if (account !== null) {
      await guestLogin(account);
    }
  }
  return query.serverSide.get<GuestProfile>('/guest/info');
};

// export const requestChannelInfo = async (link: string) => {
//   return query.serverSide
//     .post<ChatRoomInfo, string>('/guest/channel-info', link)
//     .then((res) => {
//       console.log(res);
//       return res;
//     });
// };

export const requestEnterRoom = async (link: string) => {
  return query.clientSide
    .post<{ roomId: string }, string>('/room/guest/enter', link)
    .then((res) => {
      return res.roomId;
    });
};
