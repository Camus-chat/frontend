import { query } from '@/containers/query';

export const checkId = async (username: string) => {
  return query.clientSide
    .post<boolean, object>('/member/etc/check', { username })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const requestEnterpriseSignUp = async (account: EnterpriseAccount) => {
  console.log(account);
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
  console.log(account.get('username'));
  console.log(account.get('password'));
  console.log(account.get('nickname'));
  console.log(account.get('profileImage'));

  try {
    const response = await fetch('/api/member/b2c/signup', {
      method: 'POST',
      body: account,
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Success: ', data);
      return response;
    }
    console.error('Error: ', response.statusText);
    return false;
  } catch (err) {
    console.error('Fetch Error: ', err);
    return false;
  }
};
