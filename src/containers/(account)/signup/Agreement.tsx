import { ChangeEvent, useState } from 'react';

import CheckBox from '@/containers/(account)/signup/CheckBox';
import { AGREE_TEXT } from '@/containers/(account)/signup/constants';
import { useAccountStore } from '@/states/account';

import styles from './index.module.scss';
import Button from '@/components/Button';

const Agreement = () => {
  const [service, setService] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(false);
  const clickNext = useAccountStore((state) => state.nextIndex);

  const checkedAll = service && personalInfo;
  const buttonColor = checkedAll ? 'blue' : 'gray';
  const buttonOption = checkedAll ? '' : 'disable';

  const handleAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setService(e.target.checked);
    setPersonalInfo(e.target.checked);
  };

  const handleServiceCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setService(e.target.checked);
  };

  const handlePersonalInfoCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo(e.target.checked);
  };

  const handleClick = () => {
    if (checkedAll) {
      clickNext();
    }
  };

  return (
    <div className={styles.checkBoxWrapper}>
      <CheckBox
        content={AGREE_TEXT[0]}
        isChecked={checkedAll}
        color='gray'
        onChange={handleAllCheck}
      />
      <CheckBox
        content={AGREE_TEXT[1]}
        color='white'
        isChecked={service}
        isEssential
        onChange={handleServiceCheck}
      />
      <CheckBox
        content={AGREE_TEXT[2]}
        color='white'
        isChecked={personalInfo}
        isEssential
        onChange={handlePersonalInfoCheck}
      />
      <Button
        size='large'
        color={buttonColor}
        option={buttonOption}
        onClick={handleClick}
      >
        가입하기
      </Button>
    </div>
  );
};

export default Agreement;
