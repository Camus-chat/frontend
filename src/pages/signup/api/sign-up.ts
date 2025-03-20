import { callAPI } from '@/shared/api';

export const signUp = async (data: Account.SignUp) => {
  return callAPI.clientSide
    .post('/member/signup', data, {
      headers: {
        'X-Bypass-Authorization': true,
      },
    })
    .then((res) => {
      return res.data === 'SIGNUP';
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(err);
      }
      return false;
    });
};
