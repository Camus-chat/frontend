'use client';

import styles from '@/containers/(personal)/service/profile/index.module.scss';

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

  const clickEditProfile = () => {
    console.log('수정하기');
  };

  return (
    <>
      <div className={styles.profileWrapper}>
        <Member imgSrc='/images/logo.svg' size='large' />
        <div className={styles.nickName}> {nickname}님</div>
      </div>
      <div className={styles.menuWrapper}>
        <button type='button' onClick={clickEditProfile}>
          프로필 수정
        </button>
        <button className={styles.withdrawalButton} type='button'>
          회원탈퇴
        </button>
      </div>
      <div className={styles.hr} />
    </>
  );
};

export default Profile;
