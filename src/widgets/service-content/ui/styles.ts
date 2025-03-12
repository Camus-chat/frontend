import { tv } from 'tailwind-variants';

export const itemWrapperStyle = tv({
  base: [
    'w-full max-md:h-full max-md:rounded-none max-md:shadow-none',
    'md:min-h-[50%] md:max-w-[400px]',
  ],
  variants: {
    popup: {
      true: 'z-50 max-md:absolute',
    },
  },
});
