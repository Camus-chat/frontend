import type { ReactNode } from 'react';

import type { buttonColor, buttonSize } from './props';
import { button } from './styles';

interface Props {
  children: ReactNode;
  size: buttonSize;
  color: buttonColor;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  size,
  color,
  onClick,
  className,
  disabled,
}: Props) => {
  return (
    <button
      type='button'
      className={button({ size, color, disabled, class: className })}
      onClick={() => !disabled && onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
