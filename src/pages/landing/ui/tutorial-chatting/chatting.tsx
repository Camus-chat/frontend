'use client';

import { Card } from '@heroui/react';
import { motion } from 'framer-motion';

import { ChattingRoomProvider } from '@/entities/chatting-room';
import { TUTORIAL_CHAT_MEMBER_ID } from '@/shared/config';
import { Mockup } from '@/shared/ui';
import { ChattingHeader, ChattingTitle } from '@/widgets/chatting';

import TutorialChattingBody from './chatting-body';

const createMember = (
  uuid: string,
  name: string,
  profileLink: null | string,
): Member => {
  return { uuid, username: name, nickname: name, profileLink, role: 'b2c' };
};

const TutorialChatting = () => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Mockup>
        <Card className='h-full p-2'>
          <ChattingHeader>
            <ChattingTitle title='직접 입력하고 테스트해보세요' />
          </ChattingHeader>
          <ChattingRoomProvider
            chattingMemberMap={{
              [TUTORIAL_CHAT_MEMBER_ID.ai]: createMember(
                TUTORIAL_CHAT_MEMBER_ID.ai,
                'CAMUS',
                '/images/logo.svg', // TODO: 이미지 변경
              ),
            }}
          >
            <TutorialChattingBody />
          </ChattingRoomProvider>
        </Card>
      </Mockup>
    </motion.section>
  );
};

export default TutorialChatting;
