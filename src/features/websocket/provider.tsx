'use client';

import { useEffect } from 'react';

import { getToken } from '@/shared/api';

import { useWebsocketStore } from './store';

export const WebsocketProvider: FC<{
  children: ReactNode;
  roomIds: string[];
}> = ({ children, roomIds }) => {
  useEffect(() => {
    const { client, setIsConnected, addNewMessage } =
      useWebsocketStore.getState();

    getToken().then((token) => {
      if (token) {
        client.activate(token, () => {
          setIsConnected(true);
          roomIds.forEach((roomId) => {
            // client.subscribeRoom(roomId);
            client.onReceiveMessage(roomId, (message) => {
              addNewMessage(roomId, message);
            });
          });
        });
      }
    });

    return () => {
      const { isConnected } = useWebsocketStore.getState();
      if (isConnected) {
        client.deactivate();
        setIsConnected(false);
      }
    };
  }, []);

  return children;
};
