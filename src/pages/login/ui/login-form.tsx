'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { signIn } from '@/pages/login/api/sign-in';
import { EMAIL_REGEX } from '@/shared/config';
import { useUncontrolledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

const LoginForm = () => {
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();
  const router = useRouter();

  const validate = useCallback(({ username: email, password }: LogIn) => {
    if (!email) {
      return setEmailError('아이디(메일)를 입력해주세요.');
    }

    if (!EMAIL_REGEX.test(email)) {
      return setEmailError('아이디(메일)를 정확히 입력해주세요.');
    }

    if (!password) {
      setEmailError('');
      return setPasswordError('비밀번호를 입력해주세오.');
    }

    if (passwordError.errorMessage) {
      setPasswordError('');
    }
    return true;
  }, []);

  const handleClick = useCallback(async () => {
    const requestBody: LogIn = {
      username: $email.current?.value || '',
      password: $password.current?.value || '',
    };

    if (validate(requestBody)) {
      const res = await signIn(requestBody);
      const url = res ? '/service/chat' : '/signin';
      router.push(url);
    }
  }, []);

  return (
    <>
      <Input ref={$email} {...emailError} label='Email' />
      <Password ref={$password} {...passwordError} label='Password' />
      <Button className='mt-6' size='large' color='blue' onClick={handleClick}>
        Sign in
      </Button>
    </>
  );
};

export default LoginForm;
