import { Input } from '@heroui/input';
import type { FC, RefObject } from 'react';

import { input } from '@/shared/ui/input/styles';

interface Props {
  label?: string;
  type: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMessage?: string;
  ref: RefObject<HTMLInputElement>;
}

const TextField: FC<Props> = ({
  label,
  type,
  placeholder,
  isInvalid,
  errorMessage,
  ref,
}) => {
  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      baseRef={ref}
      {...input}
    />
  );
};

export default TextField;
