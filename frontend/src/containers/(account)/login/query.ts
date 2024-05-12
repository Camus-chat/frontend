import { query } from '@/containers/query';

interface ResponseToken {
  accessToken: string;
  refreshToken: string;
}

export const requestLogin = async (isEnterprise: boolean, account: Account) => {
  const apiUrl = isEnterprise ? '/member/b2b/login' : '/member/b2c/login';
  return query
    .post<ResponseToken, Account>(false, apiUrl, account)
    .then((res) => {
      // TODO: refresh-token 에 대한 이야기 나눠볼 것. 김세진과
      localStorage.setItem('accessToken', res.accessToken);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
