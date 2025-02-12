import { api } from '@/shared/api';

export const signUp = async (data: SignUp) => {
  return api
    .auth('member/signin', data)
    .then((res) => {})
    .catch(() => {
      alert('회원가입에 실패했습니다.');
    });
};
