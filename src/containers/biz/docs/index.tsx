'use client';

import { useState } from 'react';

import Apis from '@/containers/biz/docs/Apis';
import { MENU } from '@/containers/biz/docs/constants';
import Guidance from '@/containers/biz/docs/Guidance';
import Guis from '@/containers/biz/docs/Guis';
import styles from '@/containers/biz/docs/index.module.scss';
import Introduction from '@/containers/biz/docs/Introduction';
import MenuBar from '@/containers/biz/docs/MenuBar';

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
        <div className={styles.titleWrapper}>AI 감정 필터링 서비스</div>
        <MenuBar menu={MENU} onClick={handleClick} />
        {isSelected === 'service' && <Introduction />}
        {isSelected === 'guidance' && <Guidance />}
        {isSelected === 'api' && <Apis />}
        {isSelected === 'script' && <Guis />}
      </div>
    </>
  );
};

export default Docs;
