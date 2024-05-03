import { useRef, useState } from 'react';

import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import styles from '@/containers/(account)/signup/index.module.scss';
import { useAccountStore } from '@/states/account';

import Input from '@/components/Form/Input';

const AccountInfo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);

  const { setId, setPassword, clickPrev, clickNext } = useAccountStore(
    (state) => ({
      setId: state.setId,
      setPassword: state.setPassword,
      clickPrev: state.prevIndex,
      clickNext: state.nextIndex,
    }),
  );

  const [isValid, setIsValid] = useState<boolean>(false);
  const [isPwdInvalid, setIsPwdInvalid] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkIsValid = () => {
    // TODO: ID 중복체크 api 연결 후 t/f 반환 로직 작성할 것.

    // TODO: 비밀번호 글자수 제한만 8자리로, 경고 문구 작성
    if ((passwordRef.current?.value.length as number) < 8) {
      setIsPwdInvalid(true);
      setIsValid(false);
    }

    if (checkPasswordRef.current?.value !== passwordRef.current?.value) {
      // TODO: 다르면 input tag에 invalid 표시 해줘야 함.
      setIsChecked(true);
      setIsValid(false);
    }
  };

  const handleClickNext = () => {
    setIsValid(true);
    checkIsValid();
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
        placeholder='아이디를 입력해 주세요'
      />
      <Input
        name='비밀번호'
        ref={passwordRef}
        type='password'
        placeholder='비밀번호를 입력해 주세요 (8글자 이상)'
        invalid={isPwdInvalid}
      />
      <Input
        name='비밀번호 확인'
        ref={checkPasswordRef}
        type='password'
        placeholder='비밀번호를 다시 입력해 주세요'
        invalid={isChecked}
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
