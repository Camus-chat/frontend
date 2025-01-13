import { query } from '@/containers/query';

export const updateProfileImg = async (image: File) => {
  return query.clientSide
    .patch<string, File>('/member/b2c/image', image)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const updateNickname = async (nickname: string) => {
  return query.clientSide
    .patch<string, string>('/member/b2c/nickname', nickname)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};
