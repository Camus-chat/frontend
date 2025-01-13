import type { buttonColor, buttonSize } from './props';
import type { ReactNode } from 'react';

import styles from './styles';

interface Props {
  children: ReactNode;
  size: buttonSize;
  color: buttonColor;
  onClick?: () => void;
}

const Button = ({ children, size, color, onClick }: Props) => {
  return (
    <button
      type='button'
      className={`font-semibold duration-300 ${styles.size[size]} ${styles.color[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
