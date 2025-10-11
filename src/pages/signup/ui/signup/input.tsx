import { Input } from '@heroui/react';
import { type UseControllerProps, useController } from 'react-hook-form';

interface Props
  extends UseControllerProps<SignUpFormData, 'username' | 'nickname'> {
  label: string;
}

const InputField = ({ label, ...props }: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController(props);

  return (
    <Input
      {...field}
      label={label}
      isInvalid={invalid}
      errorMessage={error?.message}
      variant='underlined'
    />
  );
};

export default InputField;
