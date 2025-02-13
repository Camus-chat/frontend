import { tv } from 'tailwind-variants';

export const auth = tv({
  slots: {
    wrapper: 'grid size-full grid-rows-[auto_1fr] gap-8 px-6',
    header: ['py-6'],
    main: ['flex size-full flex-col items-center'],
    title: 'mb-4 text-center text-4xl font-bold',
    box: 'flex w-full max-w-[448px] flex-col gap-1 rounded-md border p-6',
  },
});
