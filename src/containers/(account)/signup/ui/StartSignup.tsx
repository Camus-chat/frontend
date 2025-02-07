import Link from 'next/link';
import { useUncontrolledInput } from '@/shared/hook';
import { EMAIL_REGEX } from '@/shared/config';
import { Button, Input } from '@/shared/ui';

const StartSignup = () => {
  const [$email, emailError, setEmailError] = useUncontrolledInput();

  const validate = (email: string) => {
    if (!email) {
      return setEmailError('아이디(메일)를 입력해주세요.');
    }

    if (!EMAIL_REGEX.test(email)) {
      return setEmailError('아이디(메일)를 정확히 입력해주세요.');
    }

    return true;
  };

  const handleClick = () => {
    const email = $email.current?.value || '';
    if (validate(email)) {
      // 회원가입 요청
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <p className='text-2xl font-semibold mt-2 mb-10'>회원 가입을 시작합니다.</p>
      <Input ref={$email} {...emailError} placeholder='이메일 주소를 입력해 주십시오.' />
      <Button className='' size='large' color='blue' onClick={handleClick}>
        이메일로 가입하기
      </Button>
      <div className='flex flex-row gap-2 text-sm'>
        <p> 이미 계정이 있으신가요? </p>
        <Link href='/login' >
          <p className='text-blue-600 font-semibold'>로그인</p>
        </Link>
      </div>
    </div>
  )
}

export default StartSignup;