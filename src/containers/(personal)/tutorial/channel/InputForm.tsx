import React from 'react';

import styles from '@/containers/(personal)/tutorial/index.module.scss';

import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
  placeholder: string;
  onClick: () => void;
}

const InputForm = ({ name, onClick, placeholder }: Props) => {
  return (
    <FormWrapper name={name}>
      <input
        className={styles.inputBox}
        name={name}
        type='text'
        placeholder={placeholder}
        onClick={onClick}
      />
    </FormWrapper>
  );
};

export default InputForm;
