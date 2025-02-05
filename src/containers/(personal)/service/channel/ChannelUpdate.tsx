'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '@/components/Button';
import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';
import { updateChannel } from '@/containers/(personal)/service/channel/query';
import type { FilterLevel } from '@/containers/(personal)/service/channel/type';
import { Input } from '@/shared/ui';
import { useChannelStore } from '@/states/channel';

import {
  CHANNEL_UPDATE,
  FILTER_DROP_DOWN_OPTION,
  FILTER_OPTION_MAP,
} from './constants';
import styles from './index.module.scss';

const ChannelUpdate = () => {
  const { channel, close } = useChannelStore((state) => ({
    channel: state.channel,
    close: state.close,
  }));
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  const [filterLevel, setFilterLevel] = useState<FilterLevel>(
    channel.filterLevel,
  );

  useEffect(() => {
    title.current!.value = channel.title;
    content.current!.value = channel.content;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestUpdate = () => {
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
    updateChannel({
      title: title.current.value,
      content: content.current.value,
      filterLevel,
      link: channel.link,
    });
  };

  return (
    <>
      <div>
        <InfoTextBox
          size='small'
          title={CHANNEL_UPDATE.title}
          content={CHANNEL_UPDATE.content}
        />

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
          placeholder={FILTER_OPTION_MAP[channel.filterLevel]}
          onSelect={(level: FilterLevel) => setFilterLevel(level)}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button size='large' color='lightgray' onClick={close}>
          취소하기
        </Button>
        <Button size='large' color='blue' onClick={requestUpdate}>
          수정하기
        </Button>
      </div>
    </>
  );
};

export default ChannelUpdate;
