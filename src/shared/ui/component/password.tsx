'use client';

import { Input, type InputProps } from '@heroui/react';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

import { EyeFilledIcon, EyeSlashFilledIcon } from '@/shared/icon';

const icon = tv({
  base: 'pointer-events-none text-2xl text-default-400',
});

const Password = ({ variant = 'underlined', ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <Input
      endContent={
        <button
          aria-label='toggle password visibility'
          className='focus:outline-none'
          type='button'
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className={icon()} />
          ) : (
            <EyeFilledIcon className={icon()} />
          )}
        </button>
      }
      {...props}
      variant={variant}
      type={isVisible ? 'text' : 'password'}
    />
  );
};

export default Password;
