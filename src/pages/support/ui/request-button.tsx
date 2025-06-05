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
    if (isInvalid) {
      alert('내용을 입력해주세요.');
    } else {
      alert('성공적으로 제출되었습니다.');
    }
  }, []);

  return (
    <Button
      className='bg-gradient-to-tr from-indigo-400 to-indigo-800 text-white shadow-lg'
      size='lg'
      onClick={handleClick}
    >
      Submit
    </Button>
  );
};

export default RequestButton;
