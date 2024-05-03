import { useState } from 'react';

import SelectButton from '@/containers/(account)/SelectButton';
import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import { COUNTRY } from '@/containers/(account)/signup/constants';
import { useAccountStore } from '@/states/account';

import styles from './index.module.scss';
import DropDown from '@/components/Form/DropDown';
import FormWrapper from '@/components/Form/Wrapper';

const SelectType = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { clickPrev, clickNext } = useAccountStore((state) => ({
    clickPrev: state.prevIndex,
    clickNext: state.nextIndex,
  }));

  const handleSelectCountry = (option: string) => {
    if (option) {
      setIsSelected(true);
    }
  };

  const handleClickNext = () => {
    if (isSelected) {
      clickNext();
    }
  };

  return (
    <div className={styles.selectWrapper}>
      <DropDown
        name='거주 국가'
        options={COUNTRY}
        placeholder='거주 국가'
        onSelect={handleSelectCountry}
      />
      <FormWrapper name='회원 유형'>
        <SelectButton />
      </FormWrapper>
      <ButtonBox
        clickPrev={clickPrev}
        clickNext={handleClickNext}
        nextColor='blue'
      />
    </div>
  );
};

export default SelectType;
