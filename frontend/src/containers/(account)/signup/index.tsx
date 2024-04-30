'use client';

import { INFO_TEXT } from './constants';
import Profile from '@/containers/(account)/signup/Profile';

import styles from './index.module.scss';
import InfoTextBox from '@/components/InfoTextBox';

const Signup = () => {
  return (
    <>
      <InfoTextBox
        size='small'
        title={INFO_TEXT[3].title}
        content={INFO_TEXT[3].content}
      />
      <div className={styles.contentWrapper}>
        {/* <SelectType /> */}
        {/* <Agreement /> */}
        {/* <AccountInfo /> */}
        <Profile imgSrc='' />
      </div>
    </>
  );
};

export default Signup;
