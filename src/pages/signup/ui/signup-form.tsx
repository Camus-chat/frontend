'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

import { EMAIL_REGEX } from '@/shared/config';
import { useUncontrolledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

import { PERSONAL } from '../constants';
import EnterpriseSelect from './enterprise-select';

const SignupForm = () => {
  const [business, setBusiness] = useState(PERSONAL);
  const [$name, nameError, setNameError] = useUncontrolledInput();
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();

  const validate = useCallback(
    (name: string, email: string, password: string) => {
      if (!name) {
        return setNameError('이름을 입력해주세요.');
      }

      if (!email) {
        return setEmailError('아이디(메일)를 입력해주세요.');
      }

      if (!EMAIL_REGEX.test(email)) {
        return setEmailError('아이디(메일)를 정확히 입력해주세요.');
      }

      if (!password) {
        setEmailError('');
        return setPasswordError('비밀번호를 입력해주세오.');
      }

      if (passwordError.errorMessage) {
        setPasswordError('');
      }
      return true;
    },
    [],
  );

  const handleClick = useCallback(() => {
    const name = $name.current?.value || '';
    const email = $email.current?.value || '';
    const password = $password.current?.value || '';
    if (validate(name, email, password)) {
      // 회원가입 요청
    }
  }, []);

  return (
    <>
      <div className='mb-4 flex justify-end'>
        <span className='mr-1 text-xs text-gray-500'>
          Already have an account?
        </span>
        <Link href='/login' className='text-xs font-medium text-blue-600'>
          Sign in
        </Link>
      </div>
      <EnterpriseSelect selectedKey={business} onSelect={setBusiness} />
      <Input ref={$name} {...nameError} label='Name' />
      <Input ref={$email} {...emailError} label='Email' />
      <Password ref={$password} {...passwordError} label='Password' />
      <p className='mt-3 text-sm font-light text-gray-400'>
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
      <Button
        className='mt-5'
        size='large'
        color='disable'
        onClick={handleClick}
      >
        Create account
      </Button>
    </>
  );
};

export default SignupForm;
