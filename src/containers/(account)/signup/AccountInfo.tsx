import { useRef, useState } from 'react';

import { checkId } from '@/containers/(account)/signup/query';
import { Input } from '@/shared/ui';
import { useAccountStore } from '@/states/account';

import StepButton from './ui/step-button';
import { wrapper } from './ui/styles';

const AccountInfo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);

  const { username, setUsername, setPassword, clickPrev, clickNext } =
    useAccountStore((state) => ({
      username: state.username,
      setUsername: state.setUsername,
      setPassword: state.setPassword,
      clickPrev: state.prevIndex,
      clickNext: state.nextIndex,
    }));

  const [isExistingId, setIsExistingId] = useState<boolean>(false);
  const [isInvalidId, setIsInvalidId] = useState<boolean>(false);
  const [isInvalidPwd, setIsInvalidPwd] = useState<boolean>(false);
  const [isCheckedPwd, setIsCheckedPwd] = useState<boolean>(true);
  const idMessage = isInvalidId
    ? '글자수를 확인해주세요.'
    : '중복된 id 입니다.';

  const handleClickNext = async () => {
    const isTrue = await checkId(username);
    setIsExistingId(!isTrue);

    let isValid = true;

    if (
      (idRef.current?.value.length as number) < 5 ||
      (idRef.current?.value.length as number) > 10
    ) {
      setIsInvalidId(true);
      isValid = false;
    } else {
      setIsInvalidId(false);
    }

    if ((passwordRef.current?.value.length as number) < 8) {
      setIsInvalidPwd(true);

      isValid = false;
    } else {
      setIsInvalidPwd(false);
    }

    if (checkPasswordRef.current?.value !== passwordRef.current?.value) {
      setIsCheckedPwd(false);
      isValid = false;
    } else {
      setIsCheckedPwd(true);
    }

    if (!isExistingId && isValid) {
      setUsername(idRef.current?.value ?? '');
      setPassword(passwordRef.current?.value ?? '');
      clickNext();
    }

    console.log(idRef.current?.value);
    console.log(passwordRef.current?.value);
  };

  return (
    <div className={wrapper()}>
      <div className='flex flex-col gap-3'>
        <Input
          label='아이디'
          ref={idRef}
          type='text'
          placeholder='아이디를 입력해 주세요 (5글자 이상 10글자 이하)'
          isInvalid={isExistingId || isInvalidId}
          errorMessage={idMessage}
        />
        <Input
          label='비밀번호'
          ref={passwordRef}
          type='password'
          placeholder='비밀번호를 입력해 주세요 (8글자 이상)'
          isInvalid={isInvalidPwd}
          errorMessage='8글자 이상 입력해주세요.'
        />
        <Input
          label='비밀번호 확인'
          ref={checkPasswordRef}
          type='password'
          placeholder='비밀번호를 다시 입력해 주세요'
          isInvalid={!isCheckedPwd}
          errorMessage='비밀번호가 일치하지 않습니다'
        />
      </div>
      <StepButton />
    </div>
  );
};

export default AccountInfo;
