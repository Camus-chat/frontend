'use client';

import Link from 'next/link';

import { EMAIL_REGEX } from '@/shared/config';
import { useUncontrolledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

const LoginForm = () => {
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();

  const validate = (email: string, password: string) => {
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
  };

  const handleClick = () => {
    const email = $email.current?.value || '';
    const password = $password.current?.value || '';
    if (validate(email, password)) {
      // 로그인 요청
    }
  };

  return (
    <>
      <div className='flex justify-end'>
        <span className='mr-1 text-xs text-gray-500'>
          {`Don't have an account?`}
        </span>
        <Link href='/signup' className='text-xs font-medium text-blue-600'>
          Sign up
        </Link>
      </div>
      <Input ref={$email} {...emailError} label='Email' />
      <Password ref={$password} {...passwordError} label='Password' />
      <Button className='mt-6' size='large' color='blue' onClick={handleClick}>
        Sign in
      </Button>
    </>
  );
};

export default LoginForm;
