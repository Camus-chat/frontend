import classNames from 'classnames';
import React, { forwardRef } from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name?: string;
  type: string;
  placeholder: string;
  invalid?: boolean;
  message?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, type, placeholder, invalid = false, message }, ref) => {
    return (
      <FormWrapper name={name}>
        <input
          className={classNames(styles.inputBox, { [styles.invalid]: invalid })}
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />
        {invalid && <div className={styles.message}>{message}</div>}
      </FormWrapper>
    );
  },
);

export default Input;
