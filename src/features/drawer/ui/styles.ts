import { tv } from 'tailwind-variants';

export const drawer = tv({
  base: 'absolute right-0 top-0 z-50 flex h-screen w-[300px] flex-col bg-white transition-transform',
  variants: {
    open: {
      true: 'translate-x-0',
      false: 'translate-x-full',
    },
  },
});

export const backdrop = tv({
  base: 'fixed left-0 top-0 z-40 h-screen w-screen bg-black bg-opacity-50 md:hidden',
});

export const button = tv({
  base: 'flex items-center',
});
