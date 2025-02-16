import { api } from '@/shared/api';

export const signUp = async (data: SignUp) => {
  return api
    .auth('/member/signup', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert('회원가입에 실패했습니다.');
    });
};
