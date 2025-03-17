'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '@/containers/(personal)/service/profile/index.module.scss';
import ProfileActionPopup from '@/containers/(personal)/service/profile/ProfileActionPopup';

interface Props {
  memberInfo: Member;
}

const ProfileUpdateButton = ({ memberInfo }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <button type='button' onClick={() => setIsClicked(true)}>
        프로필 수정
      </button>

      {isClicked &&
        createPortal(
          <div className={styles.content}>
            <ProfileActionPopup
              memberInfo={memberInfo}
              clickCancel={() => setIsClicked(false)}
            />
          </div>,
          document.getElementById('content-wrapper') as HTMLDivElement,
        )}
    </>
  );
};

export default ProfileUpdateButton;
