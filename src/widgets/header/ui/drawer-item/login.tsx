'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTE } from '@/shared/config';

const Login = () => {
  return (
    <span className='w-full bg-transparent p-5'>
      <Link
        href={ROUTE.login}
        className='flex items-center gap-1 bg-transparent text-background'
      >
        로그인해주세요
        <ChevronRight />
      </Link>
    </span>
  );
};

export default Login;
