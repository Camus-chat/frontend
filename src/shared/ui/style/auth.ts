import { tv } from 'tailwind-variants';

export const auth = tv({
  slots: {
    wrapper: 'grid size-full grid-rows-[auto_1fr] gap-8 px-6',
    header: ['py-6'],
    main: ['flex size-full flex-col items-center'],
  },
});
