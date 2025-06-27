'use client';

import { useCallback, useEffect } from 'react';

import { useAssistDataStore } from '@/pages/landing/store/assist-data';
import { EMAIL_REGEX } from '@/shared/config';
import { Button } from '@/shared/ui';

type SetErrorFunction = (errorMessage: string) => void;

const RequestButton = () => {
  const resetForm = useAssistDataStore((state) => state.reset);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  const handleClick = useCallback(async () => {
    let isInvalid = false;
    const {
      email,
      setEmailError,
      lastName,
      setLastNameError,
      name,
      setNameError,
      company,
      setCompanyError,
      isAgreed,
    } = useAssistDataStore.getState();

    const validate = (
      isValid: boolean,
      setError: SetErrorFunction,
      errorMessage: string,
    ) => {
      if (isValid) {
        setError('');
        return;
      }
      setError(errorMessage);
      isInvalid = true;
    };

    validate(
      EMAIL_REGEX.test(email),
      setEmailError,
      '이메일 형식이 올바르지 않습니다.',
    );

    const requiredFields: [string, SetErrorFunction][] = [
      [lastName, setLastNameError],
      [name, setNameError],
      [company, setCompanyError],
    ];

    requiredFields.forEach(([value, setError]) =>
      validate(Boolean(value), setError, '필수 입력 항목입니다.'),
    );

    if (isInvalid) return;

    if (!isAgreed) {
      alert('서비스 약관 및 개인정보 보호정책에 동의해주세요.');
      return;
    }

    alert('성공적으로 제출되었습니다.');
    resetForm();
  }, []);

  return (
    <Button
      className='bg-gradient-to-tr from-indigo-400 to-indigo-800 text-lg text-white shadow-lg'
      size='lg'
      onClick={handleClick}
    >
      제출하기
    </Button>
  );
};

export default RequestButton;
