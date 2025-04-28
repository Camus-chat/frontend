import { tv } from 'tailwind-variants';

export const messageStyle = tv({
  slots: {
    wrapper: 'mt-1 flex w-full items-end gap-1',
    bubbleWrapper: 'flex max-w-[70%] flex-col gap-1',
    bubble: 'rounded-2xl px-4 py-3',
    mainText: 'text-sm font-semibold',
    subText: 'text-xs text-default-500',
  },
  variants: {
    type: {
      notice: {
        wrapper: 'justify-center',
      },
      sent: {
        wrapper: 'justify-end',
        bubble: 'bg-blue-100',
      },
      received: {
        bubble: 'bg-default-100',
      },
    },
    isFirst: {
      true: {
        wrapper: 'mt-3',
      },
    },
  },
  compoundVariants: [
    {
      type: 'sent',
      isFirst: true,
      class: {
        bubble: 'rounded-tr-none',
      },
    },
    {
      type: 'received',
      isFirst: true,
      class: {
        bubble: 'rounded-tl-none',
      },
    },
    {
      type: 'received',
      isFirst: false,
      class: {
        bubbleWrapper: 'ml-10',
      },
    },
  ],
});
