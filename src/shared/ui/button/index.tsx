import type { ReactNode } from 'react';

import type { buttonColor, buttonSize } from './props';
import { button } from './styles';

interface Props {
  children: ReactNode;
  size: buttonSize;
  color: buttonColor;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, size, color, onClick, className }: Props) => {
  return (
    <button
      type='button'
      className={button({ size, color, class: className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
