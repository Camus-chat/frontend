'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
  placeholder: string;
  options: DropDownItems[];
  onSelect?: (option: string) => void;
}

const DropDown = ({ name, options, placeholder, onSelect }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    `${placeholder}`,
  );

  const handleClickDropdown = () => {
    setIsClicked(!isClicked);
  };

  const handleSelectOption = (item: string) => {
    setSelectedOption(item);
    if (onSelect) {
      // TODO: Fix this
      onSelect(item);
    }
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
              onClick={() => handleSelectOption(items.name)}
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
