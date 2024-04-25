import Image from 'next/image';

import { PROFILE_IMAGE } from '@/components/ProfileImage/constants';
import styles from '@/components/ProfileImage/index.module.scss';
import { profileImageType } from '@/components/ProfileImage/type';

interface Props {
  imgSrc: string;
  size: profileImageType;
}

const Member = ({ imgSrc, size }: Props) => {
  return (
    <Image
      className={styles.profile}
      src={imgSrc}
      alt='profile'
      width={PROFILE_IMAGE[size]}
      height={PROFILE_IMAGE[size]}
    />
  );
};

export default Member;
