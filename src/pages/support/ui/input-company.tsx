'use client';

import { type ChangeEvent } from 'react';

import { useAssistDataStore } from '@/pages/support/store/assist-data';
import { Input } from '@/shared/ui';

const InputCompany = () => {
  const company = useAssistDataStore((state) => state.company);
  const setCompany = useAssistDataStore((state) => state.setCompany);
  const errorMessage = useAssistDataStore((state) => state.companyError);
  const setErrorMessage = useAssistDataStore((state) => state.setCompanyError);

  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCompany(value);
    if (!value) {
      setErrorMessage('Enter your company.');
      return;
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <Input
      variant='underlined'
      value={company}
      size='lg'
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='Company'
      onChange={handleCompanyChange}
    />
  );
};

export default InputCompany;
