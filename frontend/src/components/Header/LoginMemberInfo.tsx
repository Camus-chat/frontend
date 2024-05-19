import styles from '@/components/Header/index.module.scss';
import Member from '@/components/ProfileImage/Member';

interface Props {
  signedIn: boolean;
  info: MemberInfo;
}

const LoginMemberInfo = ({ signedIn, info }: Props) => {
  if (!signedIn) {
    return null;
  }

  return (
    <div className={styles.userInfo}>
      <Member imgSrc={info.profileLink} size='small' />
      <span className={styles.nickname}>{`${info.nickname}님`}</span>
    </div>
  );
};

export default LoginMemberInfo;
