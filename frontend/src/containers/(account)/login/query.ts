import { api } from '@/containers/query';

export const postLogin = async (isEnterprise: boolean, account: Account) => {
  try {
    if (!isEnterprise) {
      const response = await api.post(false, '/api/member/b2c/login', account);
      return response;
    }
    const response = await api.post(false, '/api/member/b2b/login', account);
    return response;
  } catch (error) {
    console.log(error);
  }
};
