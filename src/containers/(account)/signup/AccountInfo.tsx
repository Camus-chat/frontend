import { useRef, useState } from 'react';

import Input from '@/components/Form/Input';
import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import styles from '@/containers/(account)/signup/index.module.scss';
import { checkId } from '@/containers/(account)/signup/query';
import { useAccountStore } from '@/states/account';

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
    <div className={styles.contentWrapper}>
      <Input
        label='아이디'
        ref={idRef}
        type='text'
        placeholder='아이디를 입력해 주세요 (5글자 이상 10글자 이하)'
        invalid={isExistingId || isInvalidId}
        message={idMessage}
      />
      <Input
        label='비밀번호'
        ref={passwordRef}
        type='password'
        placeholder='비밀번호를 입력해 주세요 (8글자 이상)'
        invalid={isInvalidPwd}
        message='8글자 이상 입력해주세요.'
      />
      <Input
        label='비밀번호 확인'
        ref={checkPasswordRef}
        type='password'
        placeholder='비밀번호를 다시 입력해 주세요'
        invalid={!isCheckedPwd}
        message='비밀번호가 일치하지 않습니다'
      />
      <ButtonBox
        clickPrev={clickPrev}
        clickNext={handleClickNext}
        nextColor='blue'
      />
    </div>
  );
};

export default AccountInfo;
