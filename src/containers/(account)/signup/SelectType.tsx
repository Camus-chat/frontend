import { useState } from 'react';

import DropDown from '@/components/Form/DropDown';
import FormWrapper from '@/components/Form/Wrapper';
import SelectButton from '@/containers/(account)/signup/ui/SelectButton';
import { COUNTRY } from '@/containers/(account)/signup/constants';

import StepButton from './ui/step-button';
import { wrapper } from './ui/styles';

const SelectType = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectCountry = (option: string) => {
    if (option) {
      setIsSelected(true);
    }
  };

  return (
    <div className={wrapper()}>
      <div>
        <DropDown
          name='거주 국가'
          options={COUNTRY}
          placeholder='거주 국가'
          onSelect={handleSelectCountry}
        />
        <FormWrapper name='회원 유형'>
          <SelectButton />
        </FormWrapper>
      </div>
      <StepButton disabled={!isSelected} />
    </div>
  );
};

export default SelectType;
