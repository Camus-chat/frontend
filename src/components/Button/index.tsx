'use client';

import classNames from 'classnames';
import type { ReactNode } from 'react';

import { Button } from '@/shared/ui';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  size: ButtonSize;
  color: ButtonColor;
  option?: string;
  onClick?: () => void;
}

const getButtonColor = (c: ButtonColor, o: string) => {
  if (c === 'skyblue' && o === 'outline') {
    return 'selected';
  }
  if (o === 'red') {
    return 'danger';
  }
  switch (c) {
    case 'lightgray':
      return 'gray';
    case 'gray':
      return 'disable';
    case 'login':
      return 'transparent';
    default:
      return c;
  }
};

const OldButton = ({
  children,
  size,
  color,
  option = 'none',
  onClick,
}: Props) => {
  if (size === 'large') {
    return (
      <Button
        color={getButtonColor(color, option)}
        size={size}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }

  return (
    <button
      type='button'
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[option],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OldButton;
