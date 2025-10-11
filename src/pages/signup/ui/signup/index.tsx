'use client';

import { useRouter } from 'next/navigation';

import { ROUTE } from '@/shared/config';

import { SignUpForm } from './form';
import { signUp } from '../../api/sign-up';

const SignUp = () => {
  const router = useRouter();

  const onSubmit = async ({ agreed, ...data }: SignUpFormData) => {
    const success = await signUp(data);
    if (success) {
      router.push(ROUTE.login);
    } else {
      alert('회원가입에 실패했습니다.');
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
