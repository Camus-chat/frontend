'use client';

import { useRouter } from 'next/navigation';

import Button from '@/shared/ui/button';

const Login = () => {
  const router = useRouter();

  return (
    <div className='grid grid-cols-2 gap-1'>
      <Button
        size='large'
        color='transparent'
        onClick={() => router.push('/signup')}
      >
        회원가입
      </Button>
      <Button size='large' color='black' onClick={() => router.push('/login')}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
