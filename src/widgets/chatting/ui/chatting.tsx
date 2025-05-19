'use client';

import { CardBody, CardFooter } from '@heroui/react';

import { useChattingStore } from '../store';
import InputMessage from './input-message';
import MessagesNew from './messages-new';

export const Chatting: FC<{
  roomId?: string;
}> = ({ roomId }) => {
  const currentRoomId =
    useChattingStore((state) => state.currentRoomId) || roomId;

  if (!currentRoomId) {
    return (
      <CardBody>
        <div>error</div>
      </CardBody>
    );
  }

  return (
    <>
      <CardBody>
        <MessagesNew roomId={currentRoomId} />
      </CardBody>
      <CardFooter className='p-0'>
        <InputMessage roomId={currentRoomId} />
      </CardFooter>
    </>
  );
};
