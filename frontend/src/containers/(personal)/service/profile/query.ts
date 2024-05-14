import type { Profiles } from '@/containers/(personal)/service/profile/type';
import { query } from '@/containers/query';

export const requestProfile = () => {
  const defaultProfile: Profiles = { profileImg: '', nickname: '' };

  return query.serverSide
    .get<Profiles>('/api/member/b2c/info')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return defaultProfile;
    });
};
