'use client';

import { CardBody, CardFooter } from '@heroui/react';

import { useWebsocketStore } from '@/features/websocket';

import { useChattingStore } from '../store';
import InputMessage from './input-message';
import MessagesNew from './messages-new';

export const Chatting: FC<{
  roomId?: string;
}> = ({ roomId }) => {
  const currentRoomId =
    useChattingStore((state) => state.currentRoomId) || roomId;
  const client = useWebsocketStore((state) => state.client);
  const isConnected = useWebsocketStore((state) => state.isConnected);

  if (!currentRoomId) {
    return (
      <CardBody>
        <div>error</div>
      </CardBody>
    );
  }

  const handleSendMessage = (value: string) => {
    if (isConnected && !value) {
      client.sendMessage(currentRoomId, value);
    }
  };

  return (
    <>
      <CardBody>
        <MessagesNew roomId={currentRoomId} />
      </CardBody>
      <CardFooter className='p-0'>
        <InputMessage
          isDisabled={!isConnected}
          onSendMessage={handleSendMessage}
        />
      </CardFooter>
    </>
  );
};
