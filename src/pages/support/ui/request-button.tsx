'use client';

import { useCallback } from 'react';

import { useAssistDataStore } from '@/pages/support/store/assist-data';
import { Button } from '@/shared/ui';

const RequestButton = () => {
  const isInvalid = useAssistDataStore(
    (state) =>
      Boolean(state.nameError) ||
      Boolean(state.emailError) ||
      Boolean(state.companyError) ||
      !state.name ||
      !state.email ||
      !state.company ||
      !state.isAgreed,
  );

  const handleClick = useCallback(async () => {
    alert('성공적으로 제출되었습니다.');
  }, []);

  return (
    <Button
      className='mt-5'
      size='lg'
      color={isInvalid ? 'default' : 'primary'}
      onClick={handleClick}
      isDisabled={isInvalid}
    >
      Submit
    </Button>
  );
};

export default RequestButton;
