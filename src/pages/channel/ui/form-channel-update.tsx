'use client';

import { CardBody, CardFooter } from '@heroui/react';

import { Button } from '@/shared/ui';
import { useServicePopup } from '@/widgets/service-content';

import FormHeader from './form-header';
import InputChannelDescription from './input-channel-description';
import InputChannelFilterLevel from './input-channel-filter-level';
import InputChannelName from './input-channel-name';

const FormChannelUpdate = () => {
  const close = useServicePopup((state) => state.close);

  return (
    <>
      <FormHeader title='채널 수정'>
        채팅 채널 수정에 필요한 정보를 입력해주세요.
      </FormHeader>
      <CardBody className='gap-3'>
        <InputChannelName />
        <InputChannelDescription />
        <InputChannelFilterLevel />
      </CardBody>
      <CardFooter className='grid grid-cols-2 gap-3'>
        <Button size='lg' variant='flat' onClick={close}>
          취소하기
        </Button>
      </CardFooter>
    </>
  );
};

export default FormChannelUpdate;
