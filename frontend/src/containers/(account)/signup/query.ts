import { query } from '@/containers/query';

export const checkId = async (id: string) => {
  return query
    .post<boolean, string>(false, '/member/check-id', id)
    .then((res) => {
      return !!res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const requestEnterpriseSignUp = async (account: EnterpriseAccount) => {
  return query
    .post<string, EnterpriseAccount>(false, '/member/b2b/signup', account)
    .then((res) => {
      if (res === '200') {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const requestPersonalSignUp = async (account: PersonalAccount) => {
  return query
    .post<string, PersonalAccount>(false, '/member/b2b/signup', account)
    .then((res) => {
      if (res === '200') {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
