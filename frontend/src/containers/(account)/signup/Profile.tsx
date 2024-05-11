import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';

import { requestPersonalSignUp } from '@/containers/(account)/signup/query';
import { useAccountStore } from '@/states/account';

import defaultImg from './defaultImg.svg';
import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import Member from '@/components/ProfileImage/Member';

const Profile = () => {
  const router = useRouter();
  const { id, password, profileImg, nickname, setProfileImg, setNickname } =
    useAccountStore((state) => ({
      setProfileImg: state.setProfileImg,
      setNickname: state.setNickname,
      profileImg: state.profileImg,
      nickname: state.nickname,
      id: state.id,
      password: state.password,
    }));

  const [imageSrc, setImageSrc] = useState<string>(defaultImg);
  const nicknameRef = useRef<HTMLInputElement>(null);

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

  const handleClickNext = async () => {
    if (nicknameRef.current && imageSrc) {
      setProfileImg(imageSrc);
      setNickname(nicknameRef.current.value);

      const response = await requestPersonalSignUp({
        id,
        password,
        profileImg,
        nickname,
      });

      // TODO: 자동 로그인 로직 생각해보기, api 요청 보내서 처리할건가?
      if (response) {
        router.push('/');
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
      <Input name='닉네임' type='text' placeholder='닉네임을 입력해 주세요' />
      <div className={styles.signupButton}>
        <Button size='large' color='blue' onClick={handleClickNext}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Profile;
