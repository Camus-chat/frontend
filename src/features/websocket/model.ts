import { Client, type StompConfig } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { addParsedTime } from '@/entities/message';
import { API_BASE_URL } from '@/shared/config';

export class CamusClient {
  stompClient: Client;
  token: string | null = null;

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
    this.token = token;
    this.stompClient.connectHeaders = {
      Authorization: `Bearer ${token}`,
    };
    this.stompClient.onConnect = onConnect;
    this.stompClient.activate();
  }

  deactivate() {
    this.stompClient.deactivate();
  }

  sendMessage(roomId: string, message: string) {
    this.stompClient.publish({
      destination: '/pub/message_send',
      body: JSON.stringify({
        roomId,
        content: message,
        userToken: this.token,
      }),
    });
  }

  subscribeRoom(roomId: string) {
    this.stompClient.publish({
      destination: '/pub/message_received',
      body: JSON.stringify({
        roomId,
        userToken: this.token,
      }),
    });
  }

  onReceiveMessage(roomId: string, callbackFn: (message: Message) => void) {
    this.stompClient.subscribe(
      `/subscribe/message_receive/${roomId}`,
      (stompMessage) => {
        const message = addParsedTime(JSON.parse(stompMessage.body));
        if (process.env.NODE_ENV === 'development') {
          console.log(message);
        }
        callbackFn(message);
      },
    );
  }
}
