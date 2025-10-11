'use client';

import { Checkbox, type CheckboxProps } from '@heroui/react';
import type { Path, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { tv } from 'tailwind-variants';

type Props<T extends UserConsent> = CheckboxProps &
  UseControllerProps<T, Extract<Path<T>, 'agreed'>>;

const style = tv({
  base: 'max-w-full items-start pr-0',
});

const Agreement = <T extends UserConsent>({
  className,
  classNames,
  children,
  ...props
}: Props<T>) => {
  const {
    field: { value, ...field },
    fieldState: { invalid },
  } = useController(props);

  return (
    <Checkbox
      className={style({ className })}
      classNames={classNames}
      {...field}
      isSelected={value}
      isInvalid={invalid}
    >
      {children}
    </Checkbox>
  );
};

export default Agreement;
