import { Client, type StompConfig } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { API_BASE_URL } from '@/shared/config';

export class CamusClient {
  stompClient: Client;

  constructor() {
    const config: StompConfig = {
      webSocketFactory: () => new SockJS(`${API_BASE_URL}/ws-stomp`),
      connectHeaders: {},
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    };

    if (process.env.NODE_ENV === 'development') {
      config.onStompError = (frame) => {
        console.log(`Broker reported error: ${frame.headers.message}`);
        console.log(`Additional details: ${frame.body}`);
      };
      config.debug = (str: string) => {
        console.log(str);
      };
    }

    this.stompClient = new Client(config);
  }

  activate(token: string, onConnect: () => void) {
    this.stompClient.connectHeaders = {
      Authorization: `Bearer ${token}`,
    };
    this.stompClient.onConnect = onConnect;
    this.stompClient.activate();
  }

  deactivate() {
    this.stompClient.deactivate();
  }

  async sendMessage(roomId: string, message: string, token: string) {
    this.stompClient.publish({
      destination: '/pub/message_send',
      body: JSON.stringify({
        roomId,
        content: message,
        userToken: token,
      }),
    });
  }

  async subscribeRoom(roomId: string, token: string) {
    this.stompClient.publish({
      destination: '/pub/message_received',
      body: JSON.stringify({
        roomId,
        userToken: token,
      }),
    });
  }

  receiveMessage<T>(roomId: string, callback: (message: T) => void) {
    this.stompClient.subscribe(
      `/subscribe/message_receive/${roomId}`,
      (stompMessage) => {
        const content: T = JSON.parse(stompMessage.body);
        console.log(content);
        callback(content);
      },
    );
  }
}
