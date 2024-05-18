import { useRef, useState } from 'react';

import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import styles from '@/containers/(account)/signup/index.module.scss';
import { checkId } from '@/containers/(account)/signup/query';
import { useAccountStore } from '@/states/account';

import Input from '@/components/Form/Input';

const AccountInfo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);

  const { id, setId, setPassword, clickPrev, clickNext } = useAccountStore(
    (state) => ({
      id: state.id,
      setId: state.setId,
      setPassword: state.setPassword,
      clickPrev: state.prevIndex,
      clickNext: state.nextIndex,
    }),
  );

  const [isExistingId, setIsExistingId] = useState<boolean>(false);
  const [isInvalidId, setIsInvalidId] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isInvalidPwd, setIsInvalidPwd] = useState<boolean>(false);
  const [isCheckedPwd, setIsCheckedPwd] = useState<boolean>(false);
  const idMessage = isInvalidId
    ? '글자수를 확인해주세요.'
    : '중복된 id 입니다.';

  const checkIsValid = async () => {
    setIsExistingId(await checkId(id));

    if (
      (idRef.current?.value.length as number) < 5 ||
      (idRef.current?.value.length as number) > 10
    ) {
      setIsInvalidId(true);
      setIsValid(false);
    } else {
      setIsInvalidId(false);
    }

    if ((passwordRef.current?.value.length as number) < 8) {
      setIsInvalidPwd(true);
      setIsValid(false);
    } else {
      setIsInvalidPwd(false);
    }

    if (checkPasswordRef.current?.value !== passwordRef.current?.value) {
      setIsCheckedPwd(true);
      setIsValid(false);
    } else {
      setIsCheckedPwd(false);
    }
  };

  const handleClickNext = async () => {
    setIsValid(true);
    await checkIsValid();
    if (isValid) {
      setId(idRef.current?.value ?? '');
      setPassword(passwordRef.current?.value ?? '');
      clickNext();
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <Input
        name='아이디'
        ref={idRef}
        type='text'
        placeholder='아이디를 입력해 주세요 (5글자 이상 10글자 이하)'
        invalid={isExistingId || isInvalidId}
        message={idMessage}
      />
      <Input
        name='비밀번호'
        ref={passwordRef}
        type='password'
        placeholder='비밀번호를 입력해 주세요 (8글자 이상)'
        invalid={isInvalidPwd}
        message='8글자 이상 입력해주세요.'
      />
      <Input
        name='비밀번호 확인'
        ref={checkPasswordRef}
        type='password'
        placeholder='비밀번호를 다시 입력해 주세요'
        invalid={isCheckedPwd}
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
