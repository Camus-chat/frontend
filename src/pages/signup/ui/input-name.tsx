import { type ChangeEvent } from 'react';

import { Input } from '@/shared/ui';

import { useSignupDataStore } from '../store/signup-data';

const InputName = () => {
  const name = useSignupDataStore((state) => state.nickname);
  const setName = useSignupDataStore((state) => state.setNickname);
  const errorMessage = useSignupDataStore((state) => state.nicknameError);
  const setErrorMessage = useSignupDataStore((state) => state.setNicknameError);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    if (!value) {
      setErrorMessage('Enter your name.');
      return;
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <Input
      value={name}
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='Name'
      onChange={handleNameChange}
    />
  );
};

export default InputName;
