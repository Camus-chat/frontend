import { Input } from '@heroui/input';
import type { FC, RefObject } from 'react';

interface Props {
  name?: string;
  type: string;
  placeholder: string;
  invalid?: boolean;
  message?: string;
  ref: RefObject<HTMLInputElement>;
}

const TextField: FC<Props> = ({
  name,
  type,
  placeholder,
  invalid,
  message,
  ref,
}) => {
  return (
    <Input
      label={name}
      type={type}
      placeholder={placeholder}
      isInvalid={invalid}
      errorMessage={message}
      baseRef={ref}
      variant='bordered'
      radius='sm'
      classNames={{
        inputWrapper: 'px-4 h-11 border',
        mainWrapper: 'my-2',
        label: 'font-semibold',
      }}
      labelPlacement='outside'
    />
  );
};

export default TextField;
