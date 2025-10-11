import { tv } from 'tailwind-variants';

export const wrapper = tv({
  base: 'mx-auto w-full max-w-screen-xl px-5 md:px-7 lg:px-10',
});

export const hero = tv({
  slots: {
    wrapper: [wrapper(), 'py-16 md:py-24'],
  },
});

export const blur = tv({
  base: 'bg-transparent backdrop-blur-lg',
});
