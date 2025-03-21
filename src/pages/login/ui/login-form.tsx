'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { signIn } from '@/pages/login/api/sign-in';
import { EMAIL_REGEX } from '@/shared/config';
import { useUncontrolledInput } from '@/shared/hook';
import { useTokenStore } from '@/shared/store';
import { Button, Input, Password } from '@/shared/ui';

const LoginForm = () => {
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validate = useCallback(({ username: email, password }: Account) => {
    if (!email) {
      setEmailError('아이디(메일)를 입력해주세요.');
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError('아이디(메일)를 정확히 입력해주세요.');
      return false;
    }

    if (!password) {
      setEmailError('');
      setPasswordError('비밀번호를 입력해주세오.');
      return false;
    }

    if (passwordError.errorMessage) {
      setPasswordError('');
    }
    return true;
  }, []);

  const handleClick = useCallback(async () => {
    const requestBody: Account = {
      username: $email.current?.value || '',
      password: $password.current?.value || '',
    };

    if (isLoading || !validate(requestBody)) {
      return;
    }
    setIsLoading(true);
    signIn(requestBody)
      .then((res) => {
        const { setToken } = useTokenStore.getState();
        setToken(res);
        router.push('/service/chat');
      })
      .catch((err) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(err);
        }
        alert('로그인에 실패했습니다.');
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Input variant='underlined' ref={$email} {...emailError} label='Email' />
      <Password ref={$password} {...passwordError} label='Password' />
      <Button
        className='mt-6'
        size='lg'
        color='primary'
        onClick={handleClick}
        isLoading={isLoading}
      >
        Sign in
      </Button>
    </>
  );
};

export default LoginForm;
