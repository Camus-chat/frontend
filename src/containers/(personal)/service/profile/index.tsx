import Member from '@/components/ProfileImage/Member';
import styles from '@/containers/(personal)/service/profile/index.module.scss';
import ProfileUpdateButton from '@/containers/(personal)/service/profile/ProfileUpdateButton';
import { query } from '@/containers/query';

const Profile = async () => {
  const memberInfo = await query.serverSide.get<Member>('/member/b2c/info');

  return (
    <div className={styles.profileMenu}>
      <div>
        <div className={styles.profileWrapper}>
          <Member imgSrc={memberInfo.profileLink || ''} size='large' />
          <div className={styles.nickName}> {memberInfo.nickname}님</div>
        </div>
        <div className={styles.menuWrapper}>
          <ProfileUpdateButton memberInfo={memberInfo} />
          <button className={styles.withdrawalButton} type='button'>
            회원탈퇴
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
