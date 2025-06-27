import { tv } from 'tailwind-variants';

export const messageStyle = tv({
  slots: {
    base: 'mt-1 flex w-full items-end gap-1',
    wrapper: 'flex max-w-[70%] flex-col gap-1',
    bubble: 'flex flex-col gap-1 rounded-2xl px-4 py-3',
    mainText: 'text-sm font-semibold',
    subText: 'text-xs text-default-500',
    button: 'self-end text-xs text-default-500',
  },
  variants: {
    type: {
      notice: {
        base: 'justify-center',
      },
      sent: {
        base: 'justify-end',
        bubble: 'bg-blue-100',
      },
      received: {
        bubble: 'bg-default-100',
      },
    },
    isFirst: {
      true: {
        base: 'mt-3',
      },
    },
    isFiltered: {
      true: {
        bubble: 'border border-red-500 bg-red-50 text-red-500',
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
        wrapper: 'ml-10',
      },
    },
  ],
});
