import { type ChangeEvent } from 'react';

import { PASSWORD_REGEX } from '@/shared/config';
import { Password } from '@/shared/ui';

import { useSignupDataStore } from '../store/signup-data';

const InputPassword = () => {
  const password = useSignupDataStore((state) => state.password);
  const setPassword = useSignupDataStore((state) => state.setPassword);
  const errorMessage = useSignupDataStore((state) => state.passwordError);
  const setErrorMessage = useSignupDataStore((state) => state.setPasswordError);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    if (!value) {
      setErrorMessage('Enter your password.');
      return;
    }
    if (!PASSWORD_REGEX.test(value)) {
      setErrorMessage(
        'Password must be 8-16 characters, with uppercase, lowercase, digit, and special character (!@#$%^&*).',
      );
      return;
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <Password
      value={password}
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      label='Password'
      onChange={handlePasswordChange}
    />
  );
};

export default InputPassword;
