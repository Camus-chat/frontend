import { useRef, useState } from 'react';

export const useUncontrolledInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({ errorMessage: '', isInvalid: false });
  const setErrorMessage = (errorMessage: string) => {
    const isInvalid = !!errorMessage;
    setError({ errorMessage, isInvalid });
    return isInvalid;
  };
  return [ref, error, setErrorMessage] as const;
};
