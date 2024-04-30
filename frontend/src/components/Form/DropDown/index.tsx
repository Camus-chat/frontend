'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
  options: DropDownItems[];
}

const DropDown = ({ name, options }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    `${name}를 선택해주세요`,
  );

  const handleClickDropdown = () => {
    setIsClicked(!isClicked);
  };

  return (
    <FormWrapper name={name}>
      <button
        className={styles.label}
        type='button'
        onClick={handleClickDropdown}
      >
        {selectedOption}
        <ExpandMoreIcon />
      </button>
      {isClicked && (
        <div className={styles.optionList}>
          {options.map((items) => (
            <button
              key={items.value}
              type='button'
              className={styles.optionItem}
              onClick={() => setSelectedOption(items.name)}
            >
              {items.name}
            </button>
          ))}
        </div>
      )}
    </FormWrapper>
  );
};

export default DropDown;
