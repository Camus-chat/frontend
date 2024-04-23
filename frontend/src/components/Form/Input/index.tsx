import React from 'react';

import styles from './index.module.scss';
import Index from '@/components/Form/Wrapper';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  invalid: boolean;
}

const Input = ({ name, type, placeholder, invalid }: Props) => {
  return (
    <Index name={name}>
      <input
        className={styles.inputBox}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={invalid}
      />
    </Index>
  );
};

export default Input;
