import { api } from '@/shared/api';

export const signUp = async (data: SignUp) => {
  return api
    .auth('/member/signup', data)
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
