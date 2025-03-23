import { tv } from 'tailwind-variants';

export const bubbleWrapperStyle = tv({
  base: ['mt mt-2 flex w-full'],
  variants: {
    type: {
      sent: 'justify-end',
      received: 'items-end',
    },
  },
});

export const messageWrapperStyle = tv({
  base: ['flex flex-col'],
  variants: {
    type: {
      sent: 'items-end',
      received: 'items-start',
    },
  },
});

export const messageStyle = tv({
  base: ['rounded-3xl px-4 py-3'],
  variants: {
    type: {
      sent: 'bg-[#DDECF9]',
      received: 'bg-[#F6F7F8]',
      filtered: 'border-1 border-solid border-[#F84D3A] bg-[#FFEFEF]',
    },
  },
});
