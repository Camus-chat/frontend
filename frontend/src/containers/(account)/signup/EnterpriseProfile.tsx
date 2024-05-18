import { useRef, useState } from 'react';

import styles from '@/containers/(account)/signup/index.module.scss';
import { requestEnterpriseSignUp } from '@/containers/(account)/signup/query';
import { useAccountStore } from '@/states/account';

import Button from '@/components/Button';
import Input from '@/components/Form/Input';

const EnterpriseProfile = () => {
  const companyRef = useRef<HTMLInputElement>(null);
  const companyEmailRef = useRef<HTMLInputElement>(null);
  const {
    id,
    password,
    companyName,
    companyEmail,
    setCompanyName,
    setCompanyEmail,
    clickNext,
  } = useAccountStore((state) => ({
    id: state.id,
    password: state.password,
    companyName: state.companyName,
    companyEmail: state.companyEmail,
    setCompanyName: state.setCompanyName,
    setCompanyEmail: state.setCompanyEmail,
    clickNext: state.nextIndex,
  }));

  const [isEmptyName, setIsEmptyName] = useState<boolean>(false);
  const [isEmptyMail, setIsEmptyMail] = useState<boolean>(false);
  const [isValidMail, setIsValidMail] = useState<boolean>(false);
  const mailMessage = isValidMail
    ? ''
    : '잘못된 형식입니다. (예: camus@camus.life)';

  const checkIsEmpty = () => {
    if ((companyRef.current?.value.length as number) < 1) {
      setIsEmptyName(true);
    }

    if ((companyEmailRef.current?.value.length as number) < 1) {
      setIsEmptyMail(true);
    }

    if (companyEmailRef.current?.value.includes('@')) {
      setIsValidMail(true);
    }
  };

  const handleClick = async () => {
    checkIsEmpty();

    if (companyRef.current && companyEmailRef.current) {
      setCompanyName(companyRef.current.value);
      setCompanyEmail(companyEmailRef.current.value);

      const response = await requestEnterpriseSignUp({
        username: id,
        password,
        companyName,
        companyEmail,
      });

      if (response) clickNext();
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <Input
        name='회사명'
        type='text'
        placeholder='회사명을 입력해주세요.'
        ref={companyRef}
        invalid={isEmptyName}
      />
      <Input
        name='회사 이메일'
        type='text'
        placeholder='회사 이메일을 입력해주세요.'
        ref={companyEmailRef}
        invalid={isEmptyMail}
        message={mailMessage}
      />
      <div className={styles.signupButton}>
        <Button size='large' color='blue' onClick={handleClick}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default EnterpriseProfile;
