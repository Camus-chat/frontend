import Image from 'next/image';

import { PROFILE_IMAGE_SIZE } from '@/components/ProfileImage/constants';
import styles from '@/components/ProfileImage/index.module.scss';
import type { ProfileImageSize } from '@/components/ProfileImage/type';

interface Props {
  imgSrc: string;
  size: ProfileImageSize;
}

const Member = ({ imgSrc, size }: Props) => {
  return (
    <Image
      className={styles.profile}
      src={imgSrc}
      alt='profile'
      width={PROFILE_IMAGE_SIZE[size]}
      height={PROFILE_IMAGE_SIZE[size]}
    />
  );
};

export default Member;
