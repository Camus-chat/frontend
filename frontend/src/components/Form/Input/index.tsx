import classNames from 'classnames';
import React from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name?: string;
  type: string;
  placeholder: string;
  invalid?: boolean;
}

const Input = ({ name, type, placeholder, invalid = false }: Props) => {
  return (
    <FormWrapper name={name}>
      <input
        className={classNames(styles.inputBox, { [styles.invalid]: invalid })}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </FormWrapper>
  );
};

export default Input;
