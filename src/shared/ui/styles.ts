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

export const layout = tv({
  slots: {
    header: 'fixed w-full px-6 py-6',
    logoWrapper: [wrapper({ class: '!px-0' })],
    main: 'flex min-h-screen flex-col items-center px-6 pt-18 md:pt-22',
  },
  variants: {
    blur: {
      true: {
        header: [blur()],
      },
    },
  },
});
