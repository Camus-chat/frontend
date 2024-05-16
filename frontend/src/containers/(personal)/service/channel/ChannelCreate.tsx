'use client';

import { CHANNEL_CREATE, FILTER_OPTION } from './constants';
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
          onClickLeft={() => {}}
          rightButtonLabel='그룹 채팅'
          onClickRight={() => {}}
        />

        <Input name='채널명' type='text' placeholder='채널명을 입력해주세요.' />

        <Input
          name='소개글'
          type='text'
          placeholder='한 줄 소개를 작성해주세요.'
        />

        <DropDown
          name='필터링 강도'
          options={FILTER_DROP_DOWN_OPTION}
          placeholder='필터링 강도를 선택해주세요.'
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button size='large' color='lightgray' onClick={close}>
          취소하기
        </Button>
        <Button size='large' color='blue'>
          생성하기
        </Button>
      </div>
    </>
  );
};

export default ChannelCreate;
