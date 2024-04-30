import ButtonBox from '@/containers/(account)/signup/ButtonBox';

import Input from '@/components/Form/Input';

const AccountInfo = () => {
  return (
    <>
      <Input name='아이디' type='text' placeholder='아이디를 입력해 주세요' />
      <Input
        name='비밀번호'
        type='password'
        placeholder='비밀번호를 입력해 주세요'
      />
      <Input
        name='비밀번호 확인'
        type='password'
        placeholder='비밀번호를 다시 입력해 주세요'
      />
      <ButtonBox
        prev=''
        clickPrev={() => {}}
        clickNext={() => {}}
        nextColor='gray'
      />
    </>
  );
};

export default AccountInfo;
