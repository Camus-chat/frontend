'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { signUp } from '@/pages/signup/api/sign-up';
import { Button } from '@/shared/ui';

import { useSignupDataStore } from '../store/signup-data';

const SignupButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isInvalid = useSignupDataStore(
    (state) =>
      Boolean(state.nicknameError) ||
      Boolean(state.usernameError) ||
      Boolean(state.passwordError) ||
      !state.nickname ||
      !state.username ||
      !state.password ||
      !state.isAgreed,
  );

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    const { username, nickname, password, isEnterprise } =
      useSignupDataStore.getState();

    const isSuccess = await signUp({
      username,
      nickname,
      password,
      isEnterprise,
    });
    if (isSuccess) {
      router.push('/signin');
    } else {
      alert('회원가입에 실패했습니다.');
      setIsLoading(false);
    }
  }, []);

  return (
    <Button
      className='mt-5'
      size='lg'
      color={isInvalid ? 'default' : 'primary'}
      onClick={handleClick}
      isDisabled={isInvalid || isLoading}
    >
      Create account
    </Button>
  );
};

export default SignupButton;
