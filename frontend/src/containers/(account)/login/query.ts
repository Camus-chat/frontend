import { query } from '@/containers/query';
import { getCookie, setCookie } from '@/hooks/useCookie';

export const requestLogin = async (isEnterprise: boolean, account: Account) => {
  const apiUrl = isEnterprise ? '/member/b2b/login' : '/member/b2c/login';
  return query.clientSide
    .post<Token, Account>(apiUrl, account)
    .then((res) => {
      localStorage.setItem('accessToken', res.accessToken);
      setCookie('refreshToken', res.refreshToken);
      return localStorage.getItem('accessToken') && getCookie('refreshToken');
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
