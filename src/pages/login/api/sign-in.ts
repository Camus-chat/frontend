import { api } from '@/shared/api';

export const signIn = async (data: LogIn) => {
  return api
    .auth('/member/login', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert('로그인에 실패했습니다.');
    });
};
