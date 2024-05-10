'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

import { GROUP, PRIVATE } from '@/containers/(personal)/tutorial/constants';

import styles from './index.module.scss';
import Button from '@/components/Button';
import FormWrapper from '@/components/Form/Wrapper';

const SelectChatType = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(PRIVATE);

  const privateColor = isPrivate ? 'skyblue' : 'lightgray';
  const groupColor = isPrivate ? 'lightgray' : 'skyblue';

  const handleClick = (clickedValue: boolean) => {
    setIsPrivate((prev) => {
      if (prev !== clickedValue) {
        return !prev;
      }
      return prev;
    });
  };

  return (
    <FormWrapper name='채팅 유형'>
      <div className={styles.selectButtonWrapper}>
        <Button
          size='large'
          color={privateColor}
          onClick={() => handleClick(PRIVATE)}
          outline={privateColor === 'skyblue'}
        >
          <CheckCircleIcon className={styles.icon} />
          1:1채팅
        </Button>
        <Button
          size='large'
          color={groupColor}
          onClick={() => handleClick(GROUP)}
          outline={groupColor === 'skyblue'}
        >
          <CheckCircleIcon className={styles.icon} />
          그룹채팅
        </Button>
      </div>
    </FormWrapper>
  );
};

export default SelectChatType;
