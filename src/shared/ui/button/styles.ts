const sizeVariants = {
  large: 'min-w-[88px] h-[40px] px-4 text-base rounded-lg',
  small:
    'flex items-center justify-center shrink-0 mr-1 px-4 py-1.5 rounded-md',
};

const colorVariants = {
  blue: 'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
  skyblue:
    'text-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 hover:text-blue-700 active:text-blue-800',
  gray: 'text-gray-500 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 hover:text-gray-600',
  black: 'text-white bg-gray-950 hover:bg-gray-900 active:bg-gray-800',
  transparent:
    'bg-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 hover:text-gray-800',
  disable: 'bg-gray-200 text-gray-400 hover:cursor-not-allowed',
  selected:
    'text-blue-700 bg-blue-100 border border-solid border-blue-700 hover:cursor-default',
  danger:
    'text-gray-500 bg-gray-100 hover:bg-red-50 active:bg-red-100 hover:text-red-500 active:text-red-600',
};

const buttonStyles = {
  size: sizeVariants,
  color: colorVariants,
};

export default buttonStyles;
