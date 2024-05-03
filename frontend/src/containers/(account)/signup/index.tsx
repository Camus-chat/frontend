'use client';

import { INFO_TEXT } from './constants';
import AccountInfo from '@/containers/(account)/signup/AccountInfo';
import Agreement from '@/containers/(account)/signup/Agreement';
import Profile from '@/containers/(account)/signup/Profile';
import SelectType from '@/containers/(account)/signup/SelectType';
import { useAccountStore } from '@/states/account';

import InfoTextBox from '@/components/InfoTextBox';

const Signup = () => {
  const index = useAccountStore((state) => state.index);

  return (
    <>
      <InfoTextBox
        size='small'
        title={INFO_TEXT[index].title}
        content={INFO_TEXT[index].content}
      />
      <div>
        {index === 0 && <Agreement />}
        {index === 1 && <SelectType />}
        {index === 2 && <AccountInfo />}
        {index === 3 && <Profile />}
      </div>
    </>
  );
};

export default Signup;
