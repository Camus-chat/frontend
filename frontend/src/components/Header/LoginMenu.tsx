'use client';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import Button from '@/components/Button';

const LoginMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.loginMenu}>
      <Button size='large' color='login' onClick={() => router.push('/login')}>
        로그인
      </Button>
      <Button size='large' color='black' onClick={() => router.push('/signup')}>
        회원가입
      </Button>
    </div>
  );
};

export default LoginMenu;
