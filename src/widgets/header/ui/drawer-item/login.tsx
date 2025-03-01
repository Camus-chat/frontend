'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

import { ROUTE } from '@/shared/config';

const Login = () => {
  return (
    <span className='w-full bg-transparent p-5'>
      <Link href={ROUTE.login} className='bg-transparent text-white'>
        로그인해주세요
        <ExpandMoreIcon className='ml-1 -rotate-90 bg-transparent fill-white' />
      </Link>
    </span>
  );
};

export default Login;
