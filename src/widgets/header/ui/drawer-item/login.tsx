'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { ROUTE } from '@/shared/config';

const Login = () => {
  return (
    <span className='w-full bg-transparent p-5'>
      <Link href={ROUTE.login} className='bg-transparent text-white'>
        로그인해주세요
        <ChevronLeft
          style={{
            marginLeft: '4px',
            background: 'transparent',
            color: 'white',
          }}
        />
      </Link>
    </span>
  );
};

export default Login;
