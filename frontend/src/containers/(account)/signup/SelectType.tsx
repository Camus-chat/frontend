import SelectButton from '@/containers/(account)/SelectButton';
import ButtonBox from '@/containers/(account)/signup/ButtonBox';

import DropDown from '@/components/Form/DropDown';
import FormWrapper from '@/components/Form/Wrapper';

const SelectType = () => {
  return (
    <>
      <DropDown name='거주 국가' options={[{ value: '한국', name: '한국' }]} />
      <FormWrapper name='회원 유형'>
        <SelectButton />
      </FormWrapper>
      <ButtonBox prev='hidden' clickNext={() => {}} />
    </>
  );
};

export default SelectType;
