import styles from './index.module.scss';
import Button from '@/components/Button';

const LoginMenu = () => {
  return (
    <div className={styles.loginMenu}>
      <Button size='large' color='login'>
        로그인
      </Button>
      <Button size='large' color='black'>
        회원가입
      </Button>
    </div>
  );
};

export default LoginMenu;
