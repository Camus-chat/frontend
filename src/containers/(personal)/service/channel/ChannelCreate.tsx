'use client';

import { useRef, useState } from 'react';

import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';
import { createChannel } from '@/containers/(personal)/service/channel/query';
import type {
  ChannelType,
  FilterLevel,
} from '@/containers/(personal)/service/channel/type';
import { Button, Input } from '@/shared/ui';
import { useChannelStore } from '@/states/channel';

import { CHANNEL_CREATE, FILTER_DROP_DOWN_OPTION } from './constants';

const ChannelCreate = () => {
  const { close, addNewChannel } = useChannelStore((state) => ({
    close: state.close,
    addNewChannel: state.addNewChannel,
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
      alert('채널명을 입력해주세요.');
      return;
    }
    if (!content.current.value) {
      alert('소개글을 입력해주세요.');
      return;
    }
    if (!filterLevel) {
      alert('필터링 강도를 선택해주세요.');
      return;
    }
    createChannel({
      type,
      title: title.current.value,
      content: content.current.value,
      filterLevel,
    }).then((res) => {
      addNewChannel(res);
    });
  };

  return (
    <>
      <InfoTextBox
        size='small'
        title={CHANNEL_CREATE.title}
        content={CHANNEL_CREATE.content}
      />

      <div className='flex flex-col gap-2'>
        {/* <ToggleButton */}
        {/*  leftButtonLabel='1:1 채팅' */}
        {/*  onClickLeft={() => { */}
        {/*    setType('private'); */}
        {/*  }} */}
        {/*  rightButtonLabel='그룹 채팅' */}
        {/*  onClickRight={() => { */}
        {/*    setType('group'); */}
        {/*  }} */}
        {/* /> */}

        <Input
          ref={title}
          label='채널명'
          type='text'
          placeholder='채널명을 입력해주세요.'
        />

        <Input
          ref={content}
          label='소개글'
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

      <div className='my-2 grid w-full grid-cols-2 gap-2'>
        <Button size='lg' variant='flat' onClick={close}>
          취소하기
        </Button>
        <Button size='lg' color='primary' onClick={handleClick}>
          생성하기
        </Button>
      </div>
    </>
  );
};

export default ChannelCreate;
