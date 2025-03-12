import { type InputProps } from '@heroui/input';
import { tv } from 'tailwind-variants';

export const listItem = tv({
  base: 'border border-default-100 hover:shadow', // TODO: add height
});

export const titleStyle = tv({
  base: 'text-2xl font-semibold',
});

export const descriptionStyle = tv({
  base: 'text-sm',
});

export const inputStyleProps = {
  variant: 'bordered',
  labelPlacement: 'outside',
  radius: 'sm',
  classNames: {
    label: 'font-semibold',
  },
} satisfies InputProps;
