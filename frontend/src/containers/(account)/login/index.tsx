'use client';

import Link from 'next/link';

import SelectButton from '@/containers/(account)/login/SelectButton';

import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';

const Login = () => {
  const handleClick = () => {
    console.log('로그인');
  };

  return (
    <>
      <div className={styles.title}> 로그인</div>
      <SelectButton />
      <div className={styles.inputWrapper}>
        <Input type='text' placeholder='아이디를 입력해주세요' />
        <Input type='password' placeholder='비밀번호를 입력해주세요' />
        <div className={styles.buttonWrapper}>
          <Button size='large' color='blue' hover='blue' onClick={handleClick}>
            로그인
          </Button>
          <Link className={styles.link} href='/singup'>
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
