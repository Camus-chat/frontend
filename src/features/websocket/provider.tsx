'use client';

import { useEffect } from 'react';

import { useMessageStore } from '@/entities/message';
import { useTokenStore } from '@/shared/store';

import { useWebsocketStore } from './store';

export const WebsocketProvider: FC<{
  children?: ReactNode;
  roomIds: string[];
}> = ({ children, roomIds }) => {
  useEffect(() => {
    const { token } = useTokenStore.getState();

    if (token) {
      return () => {};
    }

    const { client, setIsConnected } = useWebsocketStore.getState();
    const { addNewMessage } = useMessageStore.getState();

    client.activate(token, () => {
      setIsConnected(true);
      roomIds.forEach((roomId) => {
        // client.subscribeRoom(roomId);
        client.onReceiveMessage(roomId, (message) => {
          addNewMessage(roomId, message);
        });
      });
    });

    return () => {
      const { isConnected } = useWebsocketStore.getState();
      if (isConnected) {
        client.deactivate();
        setIsConnected(false);
      }
    };
  }, []);

  if (children) {
    return children;
  }
  return null;
};
