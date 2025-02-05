'use client';

import InfoTextBox from '@/components/InfoTextBox';
import AccountInfo from '@/containers/(account)/signup/AccountInfo';
import Agreement from '@/containers/(account)/signup/Agreement';
import CompleteSignup from '@/containers/(account)/signup/CompleteSignup';
import EnterpriseProfile from '@/containers/(account)/signup/EnterpriseProfile';
import PersonalProfile from '@/containers/(account)/signup/PersonalProfile';
import SelectType from '@/containers/(account)/signup/SelectType';
import { useAccountStore } from '@/states/account';

import { INFO_TEXT } from '../constants';
import Step from './step';
import { useStepStore } from '../store/step';

const SignupPage = () => {
  const { isEnterprise } = useAccountStore((state) => ({
    isEnterprise: state.isEnterprise,
  }));
  const { index } = useStepStore((state) => ({ index: state.step }));

  return (
    <>
      <InfoTextBox
        size='small'
        title={INFO_TEXT[index].title}
        content={INFO_TEXT[index].content}
      />
      <div>
        <Step index={0}>
          <Agreement />
        </Step>
        <Step index={1}>
          <SelectType />
        </Step>
        <Step index={2}>
          <AccountInfo />
        </Step>
        <Step index={3}>
          {isEnterprise ? <EnterpriseProfile /> : <PersonalProfile />}
        </Step>
        <Step index={4}>
          <CompleteSignup />
        </Step>
      </div>
    </>
  );
};

export default SignupPage;
