import { useState } from 'react';

import SelectButton from '@/containers/(account)/SelectButton';
import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import { COUNTRY } from '@/containers/(account)/signup/constants';

import styles from './index.module.scss';
import DropDown from '@/components/Form/DropDown';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  clickPrev: () => void;
  clickNext: () => void;
}

const SelectType = ({ clickPrev, clickNext }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const buttonColor = isSelected ? 'blue' : 'gray';
  const buttonHover = isSelected ? '' : 'disable';

  // TODO: 선택된 회원 유형 정보 저장하는 로직 (SelectButton 에서 api 로직 + 상태관리 로직)
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
        nextColor={buttonColor}
        nextHover={buttonHover}
      />
    </div>
  );
};

export default SelectType;
