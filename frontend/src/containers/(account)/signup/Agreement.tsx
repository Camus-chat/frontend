import ButtonBox from '@/containers/(account)/signup/ButtonBox';
import CheckBox from '@/containers/(account)/signup/CheckBox';
import { AGREE_TEXT } from '@/containers/(account)/signup/constants';

const Agreement = () => {
  return (
    <div>
      <CheckBox content={AGREE_TEXT[0]} color='gray' />
      <CheckBox content={AGREE_TEXT[1]} color='white' isEssential />
      <CheckBox content={AGREE_TEXT[2]} color='white' isEssential />
      <ButtonBox
        prev=''
        clickPrev={() => {}}
        clickNext={() => {}}
        nextColor='gray'
      />
    </div>
  );
};

export default Agreement;
