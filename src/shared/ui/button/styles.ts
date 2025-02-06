import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'flex items-center justify-center font-medium duration-300',
  variants: {
    size: {
      large: 'h-[44px] min-w-[88px] rounded-lg px-4 text-base',
      md: 'h-[38px] min-w-[4rem] rounded-lg px-4 text-sm',
      small: 'mr-1 shrink-0 rounded-md px-4 py-1.5',
    },
    color: {
      blue: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      skyblue:
        'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200 active:text-blue-800',
      gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-300',
      black: 'bg-gray-950 text-white hover:bg-gray-900 active:bg-gray-800',
      transparent:
        'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200',
      disable: 'bg-gray-200 text-gray-400 hover:cursor-not-allowed',
      selected:
        'border border-solid border-blue-700 bg-blue-100 text-blue-700 hover:cursor-default',
      danger:
        'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 active:bg-red-100 active:text-red-600',
    },
  },
});
