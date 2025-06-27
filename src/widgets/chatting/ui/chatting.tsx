'use client';

import { CardBody, CardFooter } from '@heroui/react';

import { useWebsocketStore } from '@/features/websocket';

import { useCurrentRoom } from '../hook';
import InputMessage from './input-message';
import MessagesNew from './messages-new';

interface Props {
  roomInfo?: ChattingRoom.Info;
}

export const Chatting = ({ roomInfo }: Props) => {
  const currentRoom = useCurrentRoom(roomInfo);
  const client = useWebsocketStore((state) => state.client);
  const isConnected = useWebsocketStore((state) => state.isConnected);

  if (!currentRoom) {
    return (
      <CardBody>
        <div>error</div>
      </CardBody>
    );
  }

  const handleSendMessage = (value: string) => {
    if (isConnected && !value) {
      client.sendMessage(currentRoom.roomId, value);
    }
  };

  return (
    <>
      <CardBody>
        <MessagesNew roomInfo={currentRoom} />
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
