'use client';

import { Input } from '@heroui/input';
import { useState } from 'react';

import { useWebsocketStore } from '@/features/websocket/store';
import { Button, SendIcon } from '@/shared/ui';

const IconButton = <SendIcon size={18} />;

export const InputMessage: FC<{
  roomId: string;
}> = ({ roomId }) => {
  const client = useWebsocketStore((state) => state.client);
  const isConnected = useWebsocketStore((state) => state.isConnected);
  const [value, setValue] = useState('');
  const hasValue = !!value.trim();

  const handleSendMessage = () => {
    if (isConnected && hasValue) {
      client.sendMessage(roomId, value);
      setValue('');
    }
  };

  return (
    <Input
      isDisabled={!isConnected}
      placeholder='메시지 입력'
      classNames={{
        inputWrapper: 'pr-1',
      }}
      radius='full'
      value={value}
      onValueChange={setValue}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
      endContent={
        <Button
          size='sm'
          color='primary'
          radius='full'
          isIconOnly
          onClick={handleSendMessage}
          isDisabled={!hasValue}
        >
          {IconButton}
        </Button>
      }
    />
  );
};
