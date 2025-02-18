import { useCallback, useState } from 'react';

export const useControlledInput = () => {
  const [state, setState] = useState('');
  const [errorState, setErrorState] = useState({
    errorMessage: '',
    isInvalid: false,
  });
  const setErrorMessage = useCallback((errorMessage: string) => {
    const isInvalid = Boolean(errorMessage);
    setErrorState({ errorMessage, isInvalid });
    return isInvalid;
  }, []);
  return [state, setState, errorState, setErrorMessage] as const;
};
