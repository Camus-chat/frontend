import { Input } from '@heroui/react';
import { type UseControllerProps, useController } from 'react-hook-form';

interface Props
  extends UseControllerProps<
    SupportFormData,
    Exclude<keyof SupportFormData, 'agreed'>
  > {
  label: string;
  placeholder: string;
}

const SupportInput = ({ label, placeholder, ...props }: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController(props);

  return (
    <Input
      classNames={{ inputWrapper: 'border-1', label: 'z-0' }}
      {...field}
      label={label}
      placeholder={placeholder}
      variant='bordered'
      size='lg'
      labelPlacement='outside'
      isRequired
      errorMessage={error?.message}
      isInvalid={invalid}
    />
  );
};

export default SupportInput;
