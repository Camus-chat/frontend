'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

const Login = () => {
  return (
    <span className='p-5 bg-transparent w-full'>
      <Link href='/login' className='bg-transparent text-white'>
        로그인해주세요
        <ExpandMoreIcon className='fill-white ml-1 -rotate-90 bg-transparent' />
      </Link>
    </span>
  );
};

export default Login;
