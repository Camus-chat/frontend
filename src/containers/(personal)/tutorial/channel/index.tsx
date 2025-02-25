'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';
import { FILTER_DROP_DOWN_OPTION } from '@/containers/(personal)/service/channel/constants';
import {
  CHANNEL_CREATE,
  CHANNEL_DESCRIPTION,
  DETAIL_IMAGES,
} from '@/containers/(personal)/tutorial/channel/constants';
import InputForm from '@/containers/(personal)/tutorial/channel/InputForm';
import styles from '@/containers/(personal)/tutorial/index.module.scss';
import { Button } from '@/shared/ui';

const Channel = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const image = DETAIL_IMAGES.find((item) => item.key === currentIdx);

  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.blueBox}>
        <div className={styles.createChannelBox}>
          <InfoTextBox
            size='small'
            title={CHANNEL_CREATE.title}
            content={CHANNEL_CREATE.content}
          />
          {/* <ToggleButton */}
          {/*  leftButtonLabel='1:1 채팅' */}
          {/*  onClickLeft={() => { */}
          {/*    setCurrentIdx(0); */}
          {/*  }} */}
          {/*  rightButtonLabel='그룹 채팅' */}
          {/*  onClickRight={() => { */}
          {/*    setCurrentIdx(1); */}
          {/*  }} */}
          {/* /> */}
          <InputForm
            name='채널명'
            placeholder='채널명을 입력해주세요'
            onClick={() => setCurrentIdx(2)}
          />
          <InputForm
            name='소개글'
            placeholder='한 줄 소개를 작성해주세요.'
            onClick={() => setCurrentIdx(3)}
          />
          <DropDown
            name='필터링 강도'
            options={FILTER_DROP_DOWN_OPTION}
            placeholder='필터링 강도를 선택해주세요.'
            onSelect={() => setCurrentIdx(4)}
          />
          <div className={styles.buttonWrapper}>
            <Button size='lg' variant='flat' onClick={() => setCurrentIdx(5)}>
              취소하기
            </Button>
            <Button size='lg' color='primary' onClick={() => setCurrentIdx(6)}>
              생성하기
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.textBox}>
        <div className={styles.title}>
          {CHANNEL_DESCRIPTION[currentIdx].title}
        </div>
        <pre className={styles.description}>
          {CHANNEL_DESCRIPTION[currentIdx].content}
        </pre>
        {image && (
          <Image src={image.src} alt='detail image' width={500} height={400} />
        )}
      </div>
    </div>
  );
};

export default Channel;
