'use client';

import { Card, CardBody } from '@heroui/card';

import { PlusIcon } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import { CHANNEL_ACTION_KEY } from '../config';
import { listItem } from './styles';

const CreateButton = () => {
  const open = useServicePopup((state) => state.open);

  return (
    <Card
        shadow='none'
        className={listItem()}
        isPressable
        onPress={() => open(CHANNEL_ACTION_KEY.create)}
      >
        <CardBody className='items-center justify-center text-default-500 hover:text-default-800'>
          <PlusIcon />
          채널 추가
        </CardBody>
      </Card>
  );
};

export default CreateButton;
