import React from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  invalid: boolean;
}

const Input = ({ name, type, placeholder, invalid }: Props) => {
  return (
    <FormWrapper name={name}>
      <input
        className={styles.inputBox}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={invalid}
      />
    </FormWrapper>
  );
};

export default Input;
