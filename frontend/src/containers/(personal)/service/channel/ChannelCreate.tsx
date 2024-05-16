'use client';

import { useRef, useState } from 'react';

import { CHANNEL_CREATE, FILTER_DROP_DOWN_OPTION } from './constants';
import { createChannel } from '@/containers/(personal)/service/channel/query';
import type {
  ChannelType,
  FilterLevel,
} from '@/containers/(personal)/service/channel/type';
import { useChannelStore } from '@/states/channel';

import styles from './index.module.scss';
import Button from '@/components/Button';
import DropDown from '@/components/Form/DropDown';
import Input from '@/components/Form/Input';
import InfoTextBox from '@/components/InfoTextBox';
import ToggleButton from '@/components/ToggleButton';

const ChannelCreate = () => {
  const { close } = useChannelStore((state) => ({
    close: state.close,
  }));
  const [type, setType] = useState<ChannelType>('private');
  const [filterLevel, setFilterLevel] = useState<FilterLevel | 0>(0);
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (title.current === null || content.current === null) {
      return;
    }
    if (!title.current.value) {
      // TODO: Show error message
      return;
    }
    if (!content.current.value) {
      // TODO: Show error message
      return;
    }
    if (!filterLevel) {
      // TODO: Show error message
      return;
    }
    createChannel({
      type,
      title: title.current.value,
      content: content.current.value,
      filterLevel,
    });
  };

  return (
    <>
      <div>
        <InfoTextBox
          size='small'
          title={CHANNEL_CREATE.title}
          content={CHANNEL_CREATE.content}
        />

        <ToggleButton
          leftButtonLabel='1:1 채팅'
          onClickLeft={() => {
            setType('private');
          }}
          rightButtonLabel='그룹 채팅'
          onClickRight={() => {
            setType('group');
          }}
        />

        <Input
          ref={title}
          name='채널명'
          type='text'
          placeholder='채널명을 입력해주세요.'
        />

        <Input
          ref={content}
          name='소개글'
          type='text'
          placeholder='한 줄 소개를 작성해주세요.'
        />

        <DropDown
          name='필터링 강도'
          options={FILTER_DROP_DOWN_OPTION}
          placeholder='필터링 강도를 선택해주세요.'
          onSelect={(level: FilterLevel) => setFilterLevel(level)}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button size='large' color='lightgray' onClick={close}>
          취소하기
        </Button>
        <Button size='large' color='blue' onClick={handleClick}>
          생성하기
        </Button>
      </div>
    </>
  );
};

export default ChannelCreate;
