'use client';

import { INFO_TEXT } from './constants';
import AccountInfo from '@/containers/(account)/signup/AccountInfo';
import Agreement from '@/containers/(account)/signup/Agreement';
import CompleteSignup from '@/containers/(account)/signup/CompleteSignup';
import EnterpriseProfile from '@/containers/(account)/signup/EnterpriseProfile';
import PersonalProfile from '@/containers/(account)/signup/PersonalProfile';
import SelectType from '@/containers/(account)/signup/SelectType';
import { useAccountStore } from '@/states/account';

import InfoTextBox from '@/components/InfoTextBox';

const Signup = () => {
  const { index, isEnterprise } = useAccountStore((state) => ({
    index: state.index,
    isEnterprise: state.isEnterprise,
  }));

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
        {isEnterprise && index === 3 && <EnterpriseProfile />}
        {!isEnterprise && index === 3 && <PersonalProfile />}
        {index === 4 && <CompleteSignup />}
      </div>
    </>
  );
};

export default Signup;
