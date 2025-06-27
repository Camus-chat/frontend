'use client';

import { CardBody, CardFooter } from '@heroui/react';
import { useState } from 'react';

import { Messages } from '@/features/messages';
import { TUTORIAL_CHAT_MEMBER_ID } from '@/shared/config';
import { ChattingInput } from '@/widgets/chatting';

import { fetchFilteringPrediction } from '../../api';
import { TUTORIAL_CHAT_FILTER_LEVEL } from '../../config';
import { createMessage } from '../../lib/tutorial-chatting';

const TutorialChattingBody = () => {
  const [messages, setMessages] = useState<Message[]>([
    createMessage('안녕하세요', TUTORIAL_CHAT_MEMBER_ID.ai),
    createMessage('무엇을 도와드릴까요?', TUTORIAL_CHAT_MEMBER_ID.ai),
  ]);

  const handleSendMessage = (value: string) => {
    const message = createMessage(value, TUTORIAL_CHAT_MEMBER_ID.user);
    setMessages((prev) => [...prev, message]);

    fetchFilteringPrediction(value).then((filterLevel) => {
      message.filteredLevel = filterLevel;
      setMessages((prev) => [...prev]);
    });
  };

  return (
    <>
      <CardBody className='px-1 py-0'>
        <Messages
          messages={messages}
          filterLevel={TUTORIAL_CHAT_FILTER_LEVEL}
        />
      </CardBody>
      <CardFooter className='px-1 pb-2 pt-3'>
        <ChattingInput onSendMessage={handleSendMessage} />
      </CardFooter>
    </>
  );
};

export default TutorialChattingBody;
