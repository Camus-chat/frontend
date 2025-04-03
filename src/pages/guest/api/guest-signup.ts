import { callAPI } from '@/shared/api';

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
