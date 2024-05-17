import { ChangeEvent, useRef, useState } from 'react';

import { POPUP_DESCRIPTION } from '@/containers/(personal)/service/profile/constants';
import styles from '@/containers/(personal)/service/profile/index.module.scss';
import {
  updateNickname,
  updateProfileImg,
} from '@/containers/(personal)/service/profile/query';
import { useAccountStore } from '@/states/account';

import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import InfoTextBox from '@/components/InfoTextBox';
import Member from '@/components/ProfileImage/Member';

interface Props {
  clickCancel: () => void;
}

const ProfileActionPopup = ({ clickCancel }: Props) => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const profileImgRef = useRef<HTMLInputElement>(null);
  const { profileImg, nickname, setProfileImg, setNickname } = useAccountStore(
    (state) => ({
      profileImg: state.profileImg,
      nickname: state.nickname,
      setProfileImg: state.setProfileImg,
      setNickname: state.setNickname,
    }),
  );

  const [imageSrc, setImageSrc] = useState<string>('');

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
    if (nicknameRef.current && nicknameRef.current.value !== nickname) {
      const response = await updateNickname(nicknameRef.current?.value);
      if (response) {
        setNickname(nicknameRef.current?.value);
      }
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
            <Member imgSrc={imageSrc} size='large' />
          </label>
        </div>
        <Input
          name='닉네임'
          type='text'
          placeholder={nickname}
          ref={nicknameRef}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size='large' color='lightgray' onClick={clickCancel}>
          취소하기
        </Button>
        <Button size='large' color='blue' onClick={handleClickUpdate}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileActionPopup;
