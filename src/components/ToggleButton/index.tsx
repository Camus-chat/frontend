'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

import styles from './index.module.scss';
import Button from '@/components/Button';

interface Props {
  leftButtonLabel: string;
  onClickLeft: () => void;
  rightButtonLabel: string;
  onClickRight: () => void;
}

const ToggleButton = ({
  leftButtonLabel,
  onClickLeft,
  rightButtonLabel,
  onClickRight,
}: Props) => {
  const [isLeftClicked, setIsLeftClicked] = useState(true);

  const leftColor = isLeftClicked ? 'skyblue' : 'lightgray';
  const rightColor = !isLeftClicked ? 'skyblue' : 'lightgray';

  const handleClickLeft = () => {
    if (!isLeftClicked) {
      setIsLeftClicked(true);
      onClickLeft();
    }
  };

  const handleClickRight = () => {
    if (isLeftClicked) {
      setIsLeftClicked(false);
      onClickRight();
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <Button
        size='large'
        color={leftColor}
        onClick={handleClickLeft}
        option='outline'
      >
        <CheckCircleIcon />
        {leftButtonLabel}
      </Button>
      <Button
        size='large'
        color={rightColor}
        onClick={handleClickRight}
        option='outline'
      >
        <CheckCircleIcon />
        {rightButtonLabel}
      </Button>
    </div>
  );
};

export default ToggleButton;
