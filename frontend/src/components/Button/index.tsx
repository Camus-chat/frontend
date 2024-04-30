import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  size: string;
  color: string;
  hover?: string;
  outline?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  color,
  outline,
  hover = 'default',
  onClick,
}: Props) => {
  return (
    <button
      type='button'
      className={classNames(
        styles.Button,
        styles[size],
        styles[color],
        styles[hover],
        {
          [styles.outline]: outline,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
