import classNames from 'classnames';
import React, { ChangeEvent } from 'react';

import styles from './index.module.scss';

interface Props {
  content: string;
  color: string;
  isChecked: boolean;
  isEssential?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  content,
  color,
  isChecked,
  isEssential,
  onChange,
}: Props) => {
  return (
    <div className={classNames(styles.checkBox, styles[color])}>
      <label>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
        {isEssential && <span>[필수]</span>}
        {content}
      </label>
    </div>
  );
};

export default CheckBox;
