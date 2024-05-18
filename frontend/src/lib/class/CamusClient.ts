import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export class CamusClient {
  stompClient: Client;

  constructor() {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('https://api.camus.life/ws-stomp'),
      connectHeaders: {},
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      // TODO: 완성되면 지우기
      onStompError: (frame) => {
        console.error(frame);
      },
      debug: (str: string) => {
        console.log(str);
      },
      // TODO: 여기까지 지우기
    });
  }

  activate() {
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
      }),
    });
  }

  async subscribeRoom(roomId: string) {
    this.stompClient.publish({
      destination: '/pub/message_received',
      body: JSON.stringify({
        roomId,
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
