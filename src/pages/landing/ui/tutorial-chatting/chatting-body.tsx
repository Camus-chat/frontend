'use client';

import { CardBody, CardFooter } from '@heroui/react';
import { useState } from 'react';

import { Messages } from '@/features/messages';
import { ChattingInput } from '@/widgets/chatting';

import { createMessage } from '../../lib/tutorial-chatting';

const TutorialChattingBody = () => {
  const [messages, setMessages] = useState<Message[]>([
    createMessage('안녕하세요', 'ai'),
    createMessage('무엇을 도와드릴까요?', 'ai'),
  ]);

  const handleSendMessage = (value: string) => {
    setMessages((prev) => [...prev, createMessage(value, 'user')]);
  };

  return (
    <>
      <CardBody>
        <Messages messages={messages} />
      </CardBody>
      <CardFooter className='p-1'>
        <ChattingInput onSendMessage={handleSendMessage} />
      </CardFooter>
    </>
  );
};

export default TutorialChattingBody;
