'use client';

import React, { useState } from 'react';

import { FILTER_DROP_DOWN_OPTION } from '@/containers/(personal)/service/channel/constants';
import InputForm from '@/containers/(personal)/tutorial/channel/InputForm';
import {
  CHANNEL_CREATE,
  CHANNEL_DESCRIPTION,
} from '@/containers/(personal)/tutorial/constants';
import styles from '@/containers/(personal)/tutorial/index.module.scss';

import Button from '@/components/Button';
import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';
import ToggleButton from '@/components/ToggleButton';

const Channel = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.blueBox}>
        <div className={styles.createChannelBox}>
          <InfoTextBox
            size='small'
            title={CHANNEL_CREATE.title}
            content={CHANNEL_CREATE.content}
          />
          <ToggleButton
            leftButtonLabel='1:1 채팅'
            onClickLeft={() => {
              setCurrentIdx(0);
            }}
            rightButtonLabel='그룹 채팅'
            onClickRight={() => {
              setCurrentIdx(1);
            }}
          />
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
            <Button
              size='large'
              color='lightgray'
              onClick={() => setCurrentIdx(5)}
            >
              취소하기
            </Button>
            <Button size='large' color='blue' onClick={() => setCurrentIdx(6)}>
              생성하기
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.textBox}>
        <InfoTextBox
          size='large'
          title={CHANNEL_DESCRIPTION[currentIdx].title}
          content={CHANNEL_DESCRIPTION[currentIdx].content}
        />
      </div>
    </div>
  );
};

export default Channel;
