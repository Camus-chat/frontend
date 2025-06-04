'use client';

import { type ChangeEvent } from 'react';

import { useAssistDataStore } from '@/pages/support/store/assist-data';
import { Input } from '@/shared/ui';

const InputName = () => {
  const name = useAssistDataStore((state) => state.name);
  const setName = useAssistDataStore((state) => state.setName);
  const errorMessage = useAssistDataStore((state) => state.nameError);
  const setErrorMessage = useAssistDataStore((state) => state.setNameError);

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
      variant='bordered'
      value={name}
      size='lg'
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='이름'
      labelPlacement='outside'
      isRequired
      placeholder='홍길동'
      onChange={handleNameChange}
    />
  );
};

export default InputName;
