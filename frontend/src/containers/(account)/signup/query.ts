import { query } from '@/containers/query';

export const checkId = async (username: string) => {
  return query.clientSide.post<boolean, string>('/member/etc/check', username);
};

export const requestEnterpriseSignUp = async (account: EnterpriseAccount) => {
  return query.clientSide
    .post<boolean, EnterpriseAccount>('/member/b2b/signup', account)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const requestPersonalSignUp = async (account: FormData) => {
  return query.clientSide
    .post<boolean, FormData>('/member/b2c/signup', account)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
