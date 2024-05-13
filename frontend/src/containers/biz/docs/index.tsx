'use client';

import { useState } from 'react';

import { MENU } from '@/containers/biz/docs/constants';
import Guidance from '@/containers/biz/docs/Guidance';
import styles from '@/containers/biz/docs/index.module.scss';
import SideBar from '@/containers/biz/docs/SideBar';

import Introduction from './Introduction';
import Header from '@/components/Header';

const Docs = () => {
  const [isSelected, setIsSelected] = useState('introduction');
  const handleClick = (key: string) => {
    setIsSelected(key);
  };

  return (
    <>
      <Header biz />
      <div className={styles.container}>
        <SideBar menu={MENU} onClick={handleClick} />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>AI 감정 필터링</div>
            {isSelected === 'introduction' && <Introduction />}
            {isSelected === 'guidance' && <Guidance />}
            {isSelected === 'api' && <Introduction />}
            {isSelected === 'script' && <Guidance />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
