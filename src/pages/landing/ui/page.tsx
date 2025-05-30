import { Hero } from '@/shared/ui';

import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const LandingPage = () => {
  return (
    <Hero className='bg-sky-50/40' isFirst>
      <TutorialChattingDescription />
      <TutorialChatting />
    </Hero>
  );
};

export default LandingPage;
