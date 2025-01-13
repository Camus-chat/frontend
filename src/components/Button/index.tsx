import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  size: ButtonSize;
  color: ButtonColor;
  option?: string;
  onClick?: () => void;
}

const Button = ({ children, size, color, option = 'none', onClick }: Props) => {
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

export default Button;
