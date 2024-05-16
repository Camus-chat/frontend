'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props<T> {
  name: string;
  placeholder: string;
  options: DropDownItem<T>[];
  onSelect?: (option: T) => void;
}

const DropDown = <T = string,>({
  name,
  options,
  placeholder,
  onSelect,
}: Props<T>) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(placeholder);

  const handleClickDropdown = () => {
    setIsClicked((prev) => !prev);
  };

  const handleSelectOption = (item: DropDownItem<T>) => {
    setSelectedOption(item.name);
    setIsClicked(false);
    if (onSelect) {
      // TODO: Fix this
      onSelect(item.value);
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
              key={items.name}
              type='button'
              className={styles.optionItem}
              onClick={() => handleSelectOption(items)}
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
