'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '@/containers/(personal)/service/profile/index.module.scss';
import ProfileActionPopup from '@/containers/(personal)/service/profile/ProfileActionPopup';

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
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className={styles.profileMenu}>
      <div>
        <div className={styles.profileWrapper}>
          <Member imgSrc='/images/logo.svg' size='large' />
          <div className={styles.nickName}> {nickname}님</div>
        </div>
        <div className={styles.menuWrapper}>
          <button type='button' onClick={() => setIsClicked(!isClicked)}>
            프로필 수정
          </button>
          <button className={styles.withdrawalButton} type='button'>
            회원탈퇴
          </button>
        </div>
      </div>

      {isClicked &&
        createPortal(
          <div className={styles.content}>
            <ProfileActionPopup clickCancel={() => setIsClicked(false)} />
          </div>,
          document.getElementById('content-wrapper') as HTMLDivElement,
        )}
    </div>
  );
};

export default Profile;
