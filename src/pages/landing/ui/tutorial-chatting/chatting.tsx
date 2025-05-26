import { Card } from '@heroui/react';

import { Mockup } from '@/shared/ui';
import { ChattingHeader, ChattingTitle } from '@/widgets/chatting';

import TutorialChattingBody from './chatting-body';

const TutorialChatting = () => {
  return (
    <Mockup>
      <Card className='h-full p-2'>
        <ChattingHeader>
          <ChattingTitle title='직접 입력하고 테스트해보세요' />
        </ChattingHeader>
        <TutorialChattingBody />
      </Card>
    </Mockup>
  );
};

export default TutorialChatting;
