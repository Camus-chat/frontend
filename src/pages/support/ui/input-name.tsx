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
      variant='underlined'
      value={name}
      size='lg'
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='Name'
      onChange={handleNameChange}
    />
  );
};

export default InputName;
