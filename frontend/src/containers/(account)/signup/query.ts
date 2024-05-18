import { query } from '@/containers/query';

export const checkId = async (id: string) => {
  return query.clientSide
    .post<boolean, string>('/member/check-id', id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
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

export const requestPersonalSignUp = async (account: PersonalAccount) => {
  return query.clientSide
    .post<boolean, PersonalAccount>('/member/b2b/signup', account)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
