'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

import styles from '@/containers/(account)/login/index.module.scss';

import { ENTERPRISE, PERSONAL } from './login/constants';
import Button from '@/components/Button';

const SelectButton = () => {
  const [isEnterprise, setIsEnterprise] = useState<boolean>(ENTERPRISE);

  const enterpriseColor = isEnterprise ? 'skyblue' : 'lightgray';
  const personalColor = isEnterprise ? 'lightgray' : 'skyblue';

  const handleClick = (clickedValue: boolean) => {
    setIsEnterprise((prev) => {
      if (prev !== clickedValue) {
        return !prev;
      }
      return prev;
    });
  };

  return (
    <div className={styles.selectButtonWrapper}>
      <Button
        size='large'
        color={enterpriseColor}
        onClick={() => handleClick(ENTERPRISE)}
        outline={enterpriseColor === 'skyblue'}
      >
        <CheckCircleIcon className={styles.icon} />
        기업회원
      </Button>
      <Button
        size='large'
        color={personalColor}
        onClick={() => handleClick(PERSONAL)}
        outline={personalColor === 'skyblue'}
      >
        <CheckCircleIcon className={styles.icon} />
        개인회원
      </Button>
    </div>
  );
};

export default SelectButton;
