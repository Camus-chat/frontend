'use client';

import { Form, Input } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';

import { EMAIL_REGEX } from '@/shared/config';
import { Button, Password } from '@/shared/ui';

interface Props {
  onSubmit: (account: Account) => Promise<void>;
}

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Form className='gap-1' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='username'
        render={({ field, fieldState: { invalid, error } }) => (
          <Input
            {...field}
            isInvalid={invalid}
            errorMessage={error?.message}
            label='Email'
            variant='underlined'
          />
        )}
        rules={{
          required: '아이디(메일)를 입력해주세요.',
          pattern: {
            value: EMAIL_REGEX,
            message: '아이디(메일)를 정확히 입력해주세요.',
          },
        }}
      />
      <Controller
        control={control}
        name='password'
        render={({ field, fieldState: { invalid, error } }) => (
          <Password
            {...field}
            isInvalid={invalid}
            errorMessage={error?.message}
            label='Password'
          />
        )}
        rules={{
          required: '비밀번호를 입력해주세요.',
        }}
      />
      <Button
        className='mt-6 w-full'
        size='lg'
        color='primary'
        type='submit'
        isLoading={isSubmitting}
      >
        Sign in
      </Button>
    </Form>
  );
};
