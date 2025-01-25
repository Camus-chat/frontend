import { Input } from '@heroui/input';
import type { FC, RefObject } from 'react';

import { input } from '@/shared/ui/input/styles';

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
      {...input}
    />
  );
};

export default TextField;
