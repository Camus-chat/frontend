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

export const updateProfileImg = (image: File) => {
  return query.clientSide
    .patch<boolean, File>('api/member/b2c/image', image)
    .then((res) => {
      return !!res;
    })
    .catch((err) => console.log(err));
};

export const updateNickname = (nickname: string) => {
  return query.clientSide
    .patch<boolean, string>('api/member/b2c/nickname', nickname)
    .then((res) => {
      return !!res;
    })
    .catch((err) => console.log(err));
};
