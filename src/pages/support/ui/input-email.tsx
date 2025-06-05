'use client';

import { type ChangeEvent } from 'react';

import { useAssistDataStore } from '@/pages/landing/store/assist-data';
import { EMAIL_REGEX } from '@/shared/config';
import { Input } from '@/shared/ui';

const InputEmail = () => {
  const email = useAssistDataStore((state) => state.email);
  const setEmail = useAssistDataStore((state) => state.setEmail);
  const errorMessage = useAssistDataStore((state) => state.emailError);
  const setErrorMessage = useAssistDataStore((state) => state.setEmailError);

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
      variant='bordered'
      value={email}
      size='lg'
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='업무용 이메일'
      labelPlacement='outside'
      placeholder='이메일 주소'
      isRequired
      onChange={handleEmailChange}
    />
  );
};

export default InputEmail;
