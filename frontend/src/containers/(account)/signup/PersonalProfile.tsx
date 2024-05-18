import { ChangeEvent, useRef, useState } from 'react';

import { requestPersonalSignUp } from '@/containers/(account)/signup/query';
import { useAccountStore } from '@/states/account';

import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import Member from '@/components/ProfileImage/Member';

const PersonalProfile = () => {
  const {
    username,
    password,
    profileImg,
    nickname,
    setProfileImg,
    setNickname,
    clickNext,
  } = useAccountStore((state) => ({
    setProfileImg: state.setProfileImg,
    setNickname: state.setNickname,
    profileImg: state.profileImg,
    nickname: state.nickname,
    username: state.username,
    password: state.password,
    clickNext: state.nextIndex,
  }));

  const [imageSrc, setImageSrc] = useState<string>(
    '/images/defaultProfileImg.svg',
  );
  const profileImgRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setProfileImg(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickNext = async () => {
    if (nicknameRef.current && profileImgRef.current?.files) {
      setNickname(nicknameRef.current.value);
      setProfileImg(profileImgRef.current.files[0]);
    }

    if (
      nicknameRef.current?.value !== null &&
      profileImgRef.current?.files?.[0] !== null
    ) {
      console.log('hiu');

      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('profileImg', profileImg);
      formData.append('nickname', nickname);

      const response = await requestPersonalSignUp(formData);

      console.log(response);

      if (response) {
        clickNext();
      }
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.formWrapper}>
        <p className={styles.label}>프로필 이미지</p>
        <div className={styles.imageBox}>
          <input type='file' id='upload-image' onChange={handleChangeImg} />
          <label htmlFor='upload-image'>
            <Member imgSrc={imageSrc} size='large' />
          </label>
        </div>
      </div>
      <Input
        name='닉네임'
        type='text'
        placeholder='닉네임을 입력해 주세요'
        ref={nicknameRef}
      />
      <div className={styles.signupButton}>
        <Button size='large' color='blue' onClick={handleClickNext}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default PersonalProfile;
