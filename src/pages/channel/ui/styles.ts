import { type InputProps } from '@heroui/input';
import { tv } from 'tailwind-variants';

export const listItem = tv({
  base: 'h-40 border border-default-100 hover:shadow',
});

export const inputStyleProps = {
  variant: 'bordered',
  labelPlacement: 'outside',
  radius: 'sm',
  classNames: {
    label: 'font-semibold',
  },
} satisfies InputProps;
