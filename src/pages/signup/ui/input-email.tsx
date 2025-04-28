'use client';

import { type ChangeEvent } from 'react';

import { EMAIL_REGEX } from '@/shared/config';
import { Input } from '@/shared/ui';

import { useSignupDataStore } from '../store/signup-data';

const InputEmail = () => {
  const email = useSignupDataStore((state) => state.username);
  const setEmail = useSignupDataStore((state) => state.setUsername);
  const errorMessage = useSignupDataStore((state) => state.usernameError);
  const setErrorMessage = useSignupDataStore((state) => state.setUsernameError);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    if (!value) {
      setErrorMessage('Enter your email address.');
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setErrorMessage('Enter a valid email address.');
      return;
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <Input
      variant='underlined'
      value={email}
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='Email'
      onChange={handleEmailChange}
    />
  );
};

export default InputEmail;
