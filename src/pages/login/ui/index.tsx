import Link from 'next/link';

import Login from '@/features/login';

const LoginPage = () => {
  return (
    <>
      <h1 className='mb-4 text-[28px] font-bold'> 로그인</h1>
      <Login />
      <div className='flex justify-end pt-4'>
        <Link
          className='text-[14px] text-gray-600 hover:text-blue-600'
          href='/signup'
        >
          회원가입
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
