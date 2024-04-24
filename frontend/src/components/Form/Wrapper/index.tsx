import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  name: string;
}

const FormWrapper = ({ children, name }: Props) => {
  return (
    <div className={styles.formWrapper}>
      <p className={styles.label}>{name}</p>
      {children}
    </div>
  );
};

export default FormWrapper;
