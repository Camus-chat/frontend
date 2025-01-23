import type { ReactNode } from 'react';

import type { buttonColor, buttonSize } from './props';
import { button } from './styles';

interface Props {
  children: ReactNode;
  size: buttonSize;
  color: buttonColor;
  onClick?: () => void;
}

const Button = ({ children, size, color, onClick }: Props) => {
  return (
    <button type='button' className={button({ size, color })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
