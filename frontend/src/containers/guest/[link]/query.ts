import { query } from '@/containers/query';

export const requestChannelInfo = async (link: string) => {
  return query.serverSide.post<ChannelInfo, string>('/channel/info', link);
};

export const requestGuestProfile = async (): Promise<GuestInfo> => {
  return query.serverSide
    .get<GuestAccount>('/guest/signup')
    .then((account) => {
      console.log(account);
      return fetch(`${process.env.SERVER_SIDE_FETCH_URL}/guest/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      }).then((res) => res.headers.get('access') as string);
    })
    .then((token) => {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      headers.append('access', token);

      return fetch(`${process.env.SERVER_SIDE_FETCH_URL}/guest/info`, {
        method: 'GET',
        headers,
      }).then((res) => res.json());
    });
};

export const requestEnterRoom = async (link: string) => {
  return query.clientSide
    .post<{ roomId: string }, string>('/room/guest/enter', link)
    .then((res) => {
      return res.roomId;
    });
};
