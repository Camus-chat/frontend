import { tv } from 'tailwind-variants';

export const auth = tv({
  slots: {
    wrapper: 'grid size-full grid-rows-[auto_1fr] md:bg-gray-100',
    header: ['bg-white max-md:px-2 md:py-1', 'xl:pt-8 xl:drop-shadow-sm'],
    main: [
      'w-full rounded-2xl bg-white px-12 py-16 max-md:p-8',
      'md:w-[610px] md:place-self-center md:shadow-[0_1px_23px_0_rgba(0,0,0,0.05)]',
    ],
  },
});
