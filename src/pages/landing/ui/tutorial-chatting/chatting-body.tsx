'use client';

import { CardBody, CardFooter } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';

import { Messages } from '@/features/messages';
import { TUTORIAL_CHAT_MEMBER_ID } from '@/shared/config';
import { ChattingInput } from '@/widgets/chatting';

import { fetchFilteringPrediction } from '../../api';
import { createMessage } from '../../lib/tutorial-chatting';

const TutorialChattingBody = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    createMessage('안녕하세요', TUTORIAL_CHAT_MEMBER_ID.ai),
    createMessage('무엇을 도와드릴까요?', TUTORIAL_CHAT_MEMBER_ID.ai),
  ]);

  const handleSendMessage = (value: string) => {
    fetchFilteringPrediction(value).then((filtered) => {
      if (filtered) {
        // TODO: 필터링된 메시지 추가
      }
      const message = createMessage(value, TUTORIAL_CHAT_MEMBER_ID.user);
      setMessages((prev) => [...prev, message]);
    });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <CardBody className='overflow-y-hidden p-0'>
        <div ref={ref} className='overflow-y-auto px-1'>
          <Messages messages={messages} />
        </div>
      </CardBody>
      <CardFooter className='px-1 pb-2 pt-3'>
        <ChattingInput onSendMessage={handleSendMessage} />
      </CardFooter>
    </>
  );
};

export default TutorialChattingBody;
