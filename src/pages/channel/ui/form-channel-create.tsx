'use client';

import { CardBody, CardFooter } from '@heroui/react';

import { Button } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import { createChannel } from '../api';
import { useChannelStore } from '../store/channel';
import { useChannelFormStore } from '../store/form';
import FormHeader from './form-header';
import InputChannelDescription from './input-channel-description';
import InputChannelFilterLevel from './input-channel-filter-level';
import InputChannelName from './input-channel-name';

const CreateButton = () => {
  const isInvalid = useChannelFormStore(
    (state) => !state.title || !state.content,
  );
  const addChannel = useChannelStore((state) => state.addChannel);

  const handleClick = async () => {
    const { type, title, content, filterLevel } =
      useChannelFormStore.getState();

    const newChannel = await createChannel({
      type,
      title,
      content,
      filterLevel,
    });
    if (newChannel) {
      addChannel(newChannel);
      useServicePopup.getState().close();
    } else {
      alert('채널 생성에 실패했습니다.');
    }
  };

  return (
    <Button
      size='lg'
      color='primary'
      onClick={handleClick}
      isDisabled={isInvalid}
    >
      생성하기
    </Button>
  );
};

const FormChannelCreate = () => {
  const close = useServicePopup((state) => state.close);

  return (
    <>
      <FormHeader title='채널 생성'>
        채팅 채널 생성에 필요한 정보를 입력해주세요.
      </FormHeader>
      <CardBody className='gap-3'>
        {/* TODO: add channel type */}
        <InputChannelName />
        <InputChannelDescription />
        <InputChannelFilterLevel />
      </CardBody>
      <CardFooter className='grid grid-cols-2 gap-3'>
        <Button size='lg' variant='flat' onClick={close}>
          취소하기
        </Button>
        <CreateButton />
      </CardFooter>
    </>
  );
};

export default FormChannelCreate;
