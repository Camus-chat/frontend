import { ChangeEvent, useEffect, useRef, useState } from 'react';

import InfoTextBox from '@/components/InfoTextBox';
import Member from '@/components/ProfileImage/Member';
import { POPUP_DESCRIPTION } from '@/containers/(personal)/service/profile/constants';
import styles from '@/containers/(personal)/service/profile/index.module.scss';
import {
  updateNickname,
  updateProfileImg,
} from '@/containers/(personal)/service/profile/query';
import { Button, Input } from '@/shared/ui';
import { useAccountStore } from '@/states/account';

interface Props {
  memberInfo: Member;
  clickCancel: () => void;
}

const ProfileActionPopup = ({ memberInfo, clickCancel }: Props) => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const profileImgRef = useRef<HTMLInputElement>(null);
  const { profileImg, setProfileImg } = useAccountStore((state) => ({
    profileImg: state.profileImg,
    setProfileImg: state.setProfileImg,
  }));

  useEffect(() => {
    nicknameRef.current!.value = memberInfo.nickname;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [imageSrc, setImageSrc] = useState<string | null>(
    memberInfo.profileLink,
  );

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpdate = async () => {
    if (
      nicknameRef.current &&
      nicknameRef.current.value !== memberInfo.nickname
    ) {
      await updateNickname(nicknameRef.current?.value);
    }

    if (profileImgRef.current) {
      const newFile = profileImgRef.current.files?.[0] ?? null;

      if (
        newFile &&
        (!profileImg ||
          newFile.name !== profileImg.name ||
          newFile.size !== profileImg.size)
      ) {
        const response = await updateProfileImg(newFile);
        if (response) {
          setProfileImg(newFile);
        }
      }
    }
  };

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.formWrapper}>
        <InfoTextBox
          size='small'
          title={POPUP_DESCRIPTION.title}
          content={POPUP_DESCRIPTION.content}
        />
        <div className={styles.label}>프로필 이미지</div>
        <div className={styles.imageBox}>
          <input
            type='file'
            id='upload-image'
            onChange={handleChangeImg}
            ref={profileImgRef}
          />
          <label htmlFor='upload-image'>
            <Member imgSrc={imageSrc || ''} size='large' />
          </label>
        </div>
        <Input
          label='닉네임'
          type='text'
          placeholder='닉네임을 입력해주세요'
          ref={nicknameRef}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size='lg' variant='flat' onClick={clickCancel}>
          취소하기
        </Button>
        <Button size='lg' color='primary' onClick={handleClickUpdate}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileActionPopup;
