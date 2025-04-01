'use client';

import { useEffect } from 'react';

import { getToken } from '@/shared/api';

import { useWebsocketStore } from './store';

export const WebsocketProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  useEffect(() => {
    const { client, setIsConnected } = useWebsocketStore.getState();

    getToken().then((token) => {
      if (token) {
        client.activate(token, () => {
          setIsConnected(true);
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
