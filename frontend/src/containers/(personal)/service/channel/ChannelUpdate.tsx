'use client';

import { CHANNEL_UPDATE, FILTER_OPTION } from './constants';
import { useChannelStore } from '@/states/channel';

import styles from './index.module.scss';
import Button from '@/components/Button';
import DropDown from '@/components/Form/DropDown';
import Input from '@/components/Form/Input';
import InfoTextBox from '@/components/InfoTextBox';

const ChannelUpdate = () => {
  const { close } = useChannelStore((state) => ({
    close: state.close,
  }));

  return (
    <>
      <div>
        <InfoTextBox
          size='small'
          title={CHANNEL_UPDATE.title}
          content={CHANNEL_UPDATE.content}
        />

        <Input name='채널명' type='text' placeholder='채널명을 입력해주세요.' />

        <Input
          name='소개글'
          type='text'
          placeholder='한 줄 소개를 작성해주세요.'
        />

        <DropDown
          name='필터링 강도'
          options={FILTER_OPTION}
          placeholder='필터링 강도를 선택해주세요.'
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button size='large' color='lightgray' onClick={close}>
          취소하기
        </Button>
        <Button size='large' color='blue'>
          수정하기
        </Button>
      </div>
    </>
  );
};

export default ChannelUpdate;
