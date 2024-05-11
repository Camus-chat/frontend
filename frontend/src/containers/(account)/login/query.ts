import { query } from '@/containers/query';

export const requestLogin = async (isEnterprise: boolean, account: Account) => {
  const apiUrl = isEnterprise ? '/member/b2b/login' : '/member/b2c/login';
  return query
    .post(false, apiUrl, account)
    .then((res) => {
      if (res.status === 200) {
        // TODO: refresh-token 에 대한 이야기
        const acessToken = res.data.accessToken;
        localStorage.setItem(acessToken, acessToken);
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
    });
};

// TODO : 로그인 실
