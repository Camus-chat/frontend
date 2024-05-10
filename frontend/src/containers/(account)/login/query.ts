import { query } from '@/containers/query';

export const postLogin = async (isEnterprise: boolean, account: Account) => {
  try {
    if (!isEnterprise) {
      const response = await query.post(
        false,
        '/api/member/b2c/login',
        account,
      );
      return response;
    }
    const response = await query.post(false, '/api/member/b2b/login', account);
    return response;
  } catch (error) {
    console.log(error);
  }
};
