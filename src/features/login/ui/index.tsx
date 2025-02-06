'use client';

import { useUncontrolledInput } from '@/shared/hook';
import { Button, Input, Password } from '@/shared/ui';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  const [$email, emailError, setEmailError] = useUncontrolledInput();
  const [$password, passwordError, setPasswordError] = useUncontrolledInput();

  const validate = (email: string, password: string) => {
    if (!email) {
      return setEmailError('아이디(메일)를 입력해주세요.');
    }

    if (!emailRegex.test(email)) {
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
  };

  const handleClick = () => {
    const email = $email.current?.value || '';
    const password = $password.current?.value || '';
    if (validate(email, password)) {
      // 로그인 요청
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <Input ref={$email} {...emailError} placeholder='아이디(이메일)' />
      <Password ref={$password} {...passwordError} placeholder='비밀번호' />
      <Button className='mt-2' size='large' color='blue' onClick={handleClick}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
