import React from 'react';

import styles from '@/components/Form/TextArea/index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
}

const TextArea = ({ name }: Props) => {
  return (
    <FormWrapper name={name}>
      <textarea className={styles.textBox} />
    </FormWrapper>
  );
};

export default TextArea;
