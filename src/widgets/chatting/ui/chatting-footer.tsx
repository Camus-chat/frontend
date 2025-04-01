'use client';

import { CardFooter } from '@heroui/card';
import { Input } from '@heroui/input';
import { useEffect, useState } from 'react';

import { useWebsocketStore } from '@/features/websocket/store';
import { useTokenStore } from '@/shared/store';
import { Button, SendIcon } from '@/shared/ui';

const ChattingFooter = () => {
  const token = useTokenStore((state) => state.token);
  const client = useWebsocketStore((state) => state.client);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  useEffect(() => {
    if (token) {
      client.activate(token, () => {
        setIsSocketConnected(true);
      });
    }
  }, [token]);

  return (
    <CardFooter className='p-0'>
      <Input
        isDisabled={!isSocketConnected}
        placeholder='메시지 입력'
        classNames={{
          inputWrapper: 'pr-1',
        }}
        radius='full'
        endContent={
          <Button size='sm' color='primary' radius='full' isIconOnly>
            <SendIcon size={18} />
          </Button>
        }
      />
    </CardFooter>
  );
};

export default ChattingFooter;
