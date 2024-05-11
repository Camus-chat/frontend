import { query } from '@/containers/query';

export const requestEnterpriseSignUp = (account: EnterpriseAccount) => {
  return query
    .post(false, '/member/b2b/signup', account)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
      return false;
    })
    .catch((err) => console.log(err));
};

export const requestPersonalSignUp = (account: PersonalAccount) => {
  return query
    .post(false, '/member/b2b/signup', account)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
      return false;
    })
    .catch((err) => console.log(err));
};
