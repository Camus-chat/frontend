'use client';

import { Select, SelectItem } from '@heroui/select';
import { useState } from 'react';

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

  const handleSelectOption = (e: { target: { value: string } }) => {
    setSelectedOption(e.target.value);
    setIsClicked(false);
    if (onSelect) {
      // TODO: Fix this
      // onSelect(e.target.value);
    }
  };

  return (
    <Select
      fullWidth
      placeholder={placeholder}
      label={name}
      selectedKeys={selectedOption}
      selectionMode='single'
      onChange={handleSelectOption}
      onOpenChange={setIsClicked}
    >
      {options.map((item) => (
        <SelectItem key={item.name} className='captialize'>
          {item.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default DropDown;
