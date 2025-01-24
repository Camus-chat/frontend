'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { requestLogin } from '@/pages/login/api/query';

import styles from '../../../containers/(account)/login/index.module.scss';
import Button from '@/shared/ui/button';
import Input from '@/components/Form/Input';

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
      <h1 className={styles.title}> 로그인</h1>
      <div className={styles.inputWrapper}>
        <Input type='text' placeholder='아이디를 입력해주세요' ref={idRef} />
        <Input
          type='password'
          placeholder='비밀번호를 입력해주세요'
          ref={passwordRef}
        />
        <div className={styles.buttonWrapper}>
          <Button size='large' color='blue' onClick={handleClick}>
            로그인
          </Button>
          <Link className={styles.link} href='/signup'>
            회원가입
          </Link>
        </div>
        {!isValid && <p>로그인 정보를 모두 입력해주세요.</p>}
      </div>
    </>
  );
};

export default Login;
