import { tv } from 'tailwind-variants';

export const description = tv({
  slots: {
    wrapper: 'flex flex-col gap-4',
    title: ['font-bold', 'text-5xl md:text-6xl lg:text-7xl'],
    description: 'text-lg sm:text-xl',
  },
});
