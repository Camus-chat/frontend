import { tv } from 'tailwind-variants';

export const itemWrapperStyle = tv({
  base: [
    'h-full w-full p-2 max-md:rounded-none max-md:shadow-none',
    'md:max-h-[900px] md:max-w-[400px]',
  ],
  variants: {
    popup: {
      true: 'z-50 max-md:absolute',
    },
  },
});
