import { useCallback, useRef, useState } from 'react';

export const useUncontrolledInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({ errorMessage: '', isInvalid: false });
  const setErrorMessage = useCallback((errorMessage: string) => {
    const isInvalid = Boolean(errorMessage);
    setError({ errorMessage, isInvalid });
  }, []);
  return [ref, error, setErrorMessage] as const;
};
