'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui';

const Login = () => {
  const router = useRouter();

  return (
    <div className='grid grid-cols-2 gap-1'>
      <Button
        size='md'
        color='transparent'
        onClick={() => router.push('/signup')}
      >
        회원가입
      </Button>
      <Button size='md' color='black' onClick={() => router.push('/signin')}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
