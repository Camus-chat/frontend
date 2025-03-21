'use client';

import { CardBody, CardFooter, CardHeader } from '@heroui/card';

import { Button } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import ChannelDescriptionInput from './channel-description-input';
import ChannelFilterLevelSlider from './channel-filter-level-slider';
import ChannelNameInput from './channel-name-input';
import { descriptionStyle, titleStyle } from './styles';
import { createChannel } from '../api/channel';
import { useChannelStore } from '../store/channel';
import { useChannelFormStore } from '../store/form';

const CreateButton = () => {
  const isInvalid = useChannelFormStore(
    (state) => !state.title || !state.content,
  );
  const addChannel = useChannelStore((state) => state.addChannel);

  const handleClick = async () => {
    const { type, title, content, filterLevel, reset } =
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
      reset();
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

const ChannelCreate = () => {
  const close = useServicePopup((state) => state.close);

  return (
    <>
      <CardHeader className='flex-col items-start'>
        <h3 className={titleStyle()}>채널 생성</h3>
        <p className={descriptionStyle()}>
          채팅 채널 생성에 필요한 정보를 입력해주세요.
        </p>
      </CardHeader>
      <CardBody className='gap-3'>
        {/* TODO: add channel type */}
        <ChannelNameInput />
        <ChannelDescriptionInput />
        <ChannelFilterLevelSlider />
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

export default ChannelCreate;
