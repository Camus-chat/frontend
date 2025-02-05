import { Input } from '@heroui/input';
import type { FC, RefObject } from 'react';

import { input } from '@/shared/ui/input/styles';

interface Props {
  label?: string;
  type: string;
  placeholder: string;
  invalid?: boolean;
  message?: string;
  ref: RefObject<HTMLInputElement>;
}

const TextField: FC<Props> = ({
  label,
  type,
  placeholder,
  invalid,
  message,
  ref,
}) => {
  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      isInvalid={invalid}
      errorMessage={message}
      baseRef={ref}
      {...input}
    />
  );
};

export default TextField;
