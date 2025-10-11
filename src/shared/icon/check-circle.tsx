export const CheckCircle = ({ size = 24, ...props }: IconSvgProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.3425 8.24658L10.125 13.6727L7.65754 11.5193L6.34247 13.0262L10.125 16.3273L17.6575 9.75343L16.3425 8.24658Z'
        fill='currentColor'
      />
    </svg>
  );
};
