'use client';

import SignupInfoMessage from '@/containers/(account)/signup/ui/SignupInfoMessage';
import SignupForm from '@/containers/(account)/signup/ui/SignupForm';

// 개발자 플랜 소개 컴포넌트
// import InfoPlanMessage from '@/containers/(account)/signup/ui/InfoPlanMessage';

const SignupPage = () => {
  return (
    <>
      <SignupInfoMessage />
      <SignupForm />
      {/*<InfoPlanMessage />*/}
    </>
  );
};

export default SignupPage;
