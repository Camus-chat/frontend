'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { requestLogin } from '@/pages/login/api/query';
import { Input } from '@/shared/ui';
import Button from '@/shared/ui/button';

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const router = useRouter();

  const checkIsValid = async () => {
    if (idRef.current?.value === '' || passwordRef.current?.value === '') {
      setIsValid(false);
    }
  };

  const handleClick = async () => {
    await checkIsValid();

    if (idRef.current?.value !== '' && passwordRef.current?.value !== '') {
      const response = await requestLogin(false, {
        username: idRef.current ? idRef.current.value : '',
        password: passwordRef.current ? passwordRef.current.value : '',
      });
      setIsValid(response);
      console.log(response);
      if (isValid) {
        router.push('/');
      }
    }
  };

  return (
    <>
      <h1 className='mb-4 text-[28px] font-bold'> 로그인</h1>
      <div>
        <Input type='text' placeholder='아이디를 입력해주세요' ref={idRef} />
        <Input
          type='password'
          placeholder='비밀번호를 입력해주세요'
          ref={passwordRef}
        />
        <div className='flex flex-col py-2'>
          <Button size='large' color='blue' onClick={handleClick}>
            로그인
          </Button>
          <div className='flex justify-end py-2'>
            <Link
              className='text-[14px] text-gray-400 hover:text-blue-600'
              href='/signup'
            >
              회원가입
            </Link>
          </div>
        </div>
        {!isValid && (
          <p className='text-red-500'>로그인 정보를 모두 입력해주세요.</p>
        )}
      </div>
    </>
  );
};

export default Login;
