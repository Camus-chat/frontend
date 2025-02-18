'use client';

import { Checkbox } from '@heroui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useCallback, useMemo, useState } from 'react';

import { EMAIL_REGEX, PASSWORD_REGEX } from '@/shared/config';
import { useControlledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

import { signUp } from '../api/sign-up';
import { PERSONAL } from '../constants';
import EnterpriseSelect from './enterprise-select';

const SignupForm = () => {
  const [isEnterprise, setIsEnterprise] = useState(PERSONAL);
  const [name, setName, nameError, setNameError] = useControlledInput();
  const [email, setEmail, emailError, setEmailError] = useControlledInput();
  const [password, setPassword, passwordError, setPasswordError] =
    useControlledInput();
  const [isAgree, setIsAgree] = useState(false);
  const router = useRouter();

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    if (!value) {
      setNameError('Enter your name.');
      return;
    }
    setNameError('');
  }, []);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    if (!value) {
      setEmailError('Enter your email address.');
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setEmailError('Enter a valid email address.');
      return;
    }
    setEmailError('');
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPassword(value);
      if (!value) {
        setPasswordError('Enter your password.');
        return;
      }
      if (!PASSWORD_REGEX.test(value)) {
        setPasswordError(
          'Password must be 8-16 characters, with uppercase, lowercase, digit, and special character (!@#$%^&*).',
        );
        return;
      }
      setPasswordError('');
    },
    [],
  );

  const isInvalid = useMemo(
    () =>
      emailError.isInvalid || nameError.isInvalid || passwordError.isInvalid,
    [emailError, nameError, passwordError],
  );

  const validate = !isInvalid && isAgree && name && email && password;

  const handleClick = useCallback(async () => {
    if (!validate) {
      return;
    }
    const isSuccess = await signUp({
      nickname: name,
      username: email,
      password,
      isEnterprise,
    });
    if (isSuccess) {
      router.push('/signin');
    } else {
      alert('회원가입에 실패했습니다.');
    }
  }, []);

  return (
    <>
      <EnterpriseSelect selectedKey={isEnterprise} onSelect={setIsEnterprise} />
      <Input
        value={name}
        {...nameError}
        label='Name'
        onChange={handleNameChange}
      />
      <Input
        value={email}
        {...emailError}
        label='Email'
        onChange={handleEmailChange}
      />
      <Password
        value={password}
        {...passwordError}
        label='Password'
        onChange={handlePasswordChange}
      />
      <Checkbox
        className='mt-2 max-w-full items-start pr-0'
        isSelected={isAgree}
        onValueChange={setIsAgree}
      >
        <p className='text-sm font-light text-gray-400'>
          {"I agree to CAMUS's "}
          <Link href='/terms-of-service' className='font-normal text-blue-600'>
            Terms of Service
          </Link>
          {' and '}
          <Link href='/privacy-notice' className='font-normal text-blue-600'>
            Privacy Policy
          </Link>
          {
            ' which includes my consent to receive marketing information from CAMUS. I can unsubscribe from marketing communications at any time.'
          }
        </p>
      </Checkbox>
      <Button
        className='mt-5'
        size='large'
        color={validate ? 'blue' : 'disable'}
        onClick={handleClick}
      >
        Create account
      </Button>
    </>
  );
};

export default SignupForm;
