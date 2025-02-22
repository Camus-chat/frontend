'use client';

import Agreement from './agreement';
import EnterpriseSelect from './enterprise-select';
import InputEmail from './input-email';
import InputName from './input-name';
import InputPassword from './input-password';
import SignupButton from './signup-button';

const SignupForm = () => {
  return (
    <>
      <EnterpriseSelect />
      <InputName />
      <InputEmail />
      <InputPassword />
      <Agreement />
      <SignupButton />
    </>
  );
};

export default SignupForm;
