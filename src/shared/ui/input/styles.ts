import type { InputProps } from '@heroui/input';
import { tv } from 'tailwind-variants';

export const input: InputProps = {
  radius: 'sm',
  variant: 'bordered',
  labelPlacement: 'outside',
  classNames: {
    inputWrapper: 'px-4 h-11 border',
    label: 'font-semibold',
    input: '!text-default-900',
  },
};

export const icon = tv({
  base: 'text-default-400 pointer-events-none text-2xl',
});
