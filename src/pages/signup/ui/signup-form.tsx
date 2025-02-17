'use client';

import { Checkbox } from '@heroui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { EMAIL_REGEX } from '@/shared/config';
import { useUncontrolledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

import { signUp } from '../api/sign-up';
import { PERSONAL } from '../constants';
import EnterpriseSelect from './enterprise-select';

const SignupForm = () => {
  const [isEnterprise, setIsEnterprise] = useState(PERSONAL);
  const [$name, nameError, setNameError] = useUncontrolledInput();
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();
  const [isAgree, setIsAgree] = useState(false);
  const router = useRouter();

  const validate = useCallback(
    ({ nickname: name, username: email, password }: SignUp) => {
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

  const handleClick = useCallback(async () => {
    const requestBody: SignUp = {
      nickname: $name.current?.value || '',
      username: $email.current?.value || '',
      password: $password.current?.value || '',
      isEnterprise,
    };
    if (!validate(requestBody)) {
      return;
    }
    const isSuccess = await signUp(requestBody);
    if (isSuccess) {
      router.push('/signin');
    } else {
      alert('회원가입에 실패했습니다.');
    }
  }, []);

  return (
    <>
      <EnterpriseSelect selectedKey={isEnterprise} onSelect={setIsEnterprise} />
      <Input ref={$name} {...nameError} label='Name' />
      <Input ref={$email} {...emailError} label='Email' />
      <Password ref={$password} {...passwordError} label='Password' />
      <Checkbox
        className='mt-1.5 max-w-full items-start pr-0'
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
      <Button className='mt-5' size='large' color='blue' onClick={handleClick}>
        Create account
      </Button>
    </>
  );
};

export default SignupForm;
