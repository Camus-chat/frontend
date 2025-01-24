import { query } from '@/containers/query';

export const requestLogin = async (isEnterprise: boolean, account: Account) => {
  const apiUrl = isEnterprise ? '/member/b2b/login' : '/member/b2c/login';
  return query.clientSide
    .post<{ role: string }, Account>(apiUrl, account)
    .then((res) => {
      const isValid = res.role.length > 0;
      console.log(res);
      return isValid;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
