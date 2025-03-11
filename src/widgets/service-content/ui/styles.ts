import { tv } from 'tailwind-variants';

export const wrapper = tv({
  base: [
    'w-full max-md:rounded-none max-md:shadow-none',
    'md:min-h-[50%] md:max-w-[400px]',
  ],
  variants: {
    popup: {
      true: 'max-md:absolute',
    },
  },
});
