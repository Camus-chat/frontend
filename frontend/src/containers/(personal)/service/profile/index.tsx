import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from '@/containers/(personal)/service/profile/index.module.scss';
import { requestProfile } from '@/containers/(personal)/service/profile/query';
import type { Profiles } from '@/containers/(personal)/service/profile/type';

import Member from '@/components/ProfileImage/Member';

const Profile = () => {
  // TODO: To change "ServerSide Data Fetching Logic" ... Get Profile
  // const [profile, setProfile] = useState<Profiles>({
  //   profileImg: '',
  //   nickname: '',
  // });
  //
  // const handle = async () => {
  //   const response = await requestProfile();
  //   setProfile(response);
  // };
  const nickname = '민돌멩이';

  return (
    <>
      <div className={styles.profileWrapper}>
        <Member imgSrc='/images/logo.svg' size='large' />
        <div className={styles.nickName}> {nickname}님</div>
      </div>
      <div className={styles.hr} />
      <div className={styles.navigate}>
        <Link href='/'>프로필 수정하기 </Link>
      </div>
      <div className={styles.hr} />
    </>
  );
};

export default Profile;
