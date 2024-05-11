'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { requestLogin } from '@/containers/(account)/login/query';
import SelectButton from '@/containers/(account)/SelectButton';
import { useAccountStore } from '@/states/account';

import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { isEnterprise } = useAccountStore();
  const router = useRouter();

  const handleClick = async () => {
    if (idRef.current && passwordRef.current) {
      await requestLogin(isEnterprise, {
        id: idRef.current.value,
        password: passwordRef.current.value,
      });

      // TODO : 기업 회원일 때 라우팅 뭐임?
      router.push(isEnterprise ? '/' : '/');
    }
  };

  return (
    <>
      <div className={styles.title}> 로그인</div>
      <SelectButton />
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
      </div>
    </>
  );
};

export default Login;
