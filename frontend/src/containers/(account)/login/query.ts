import { query } from '@/containers/query';

export const requestLogin = async (isEnterprise: boolean, account: Account) => {
  const apiUrl = isEnterprise ? '/member/b2b/login' : '/member/b2c/login';
  return query.clientSide
    .post<string, Account>(apiUrl, account)
    .then((res) => {
      // localStorage.setItem('accessToken', res.accessToken);
      // setCookie('refreshToken', res.refreshToken);
      console.log(res);
      // console.log(res.accessToken);
      // console.log(res.refreshToken);
      return !!res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
