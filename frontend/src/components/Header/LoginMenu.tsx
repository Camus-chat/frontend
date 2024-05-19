'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

const LoginMenu = () => {
  const router = useRouter();

  return (
    <>
      <Button size='large' color='login' onClick={() => router.push('/login')}>
        로그인
      </Button>
      <Button size='large' color='black' onClick={() => router.push('/signup')}>
        회원가입
      </Button>
    </>
  );
};

export default LoginMenu;
