'use client';

import { useRouter } from 'next/navigation';

import { LoginForm as Form, signIn } from '@/features/login';
import { ROUTE } from '@/shared/config';
import { useTokenStore } from '@/shared/store';

const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (account: Account) => {
    try {
      const token = await signIn(account);
      useTokenStore.getState().setToken(token);
      router.push(ROUTE.chat);
    } catch (err) {
      console.debug(err);
      alert('로그인에 실패했습니다.');
    }
  };

  return <Form onSubmit={onSubmit} />;
};

export default LoginForm;
