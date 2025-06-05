import { Hero } from '@/shared/ui';

import SupportDescription from './support/description';
import SupportForm from './support/form';
import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const LandingPage = () => {
  return (
    <>
      <Hero className='bg-sky-50/40' isFirst>
        <TutorialChattingDescription />
        <TutorialChatting />
      </Hero>
      <Hero className='bg-[url(/images/background-support.svg)] bg-cover bg-center bg-no-repeat'>
        <SupportDescription />
        <SupportForm />
      </Hero>
    </>
  );
};

export default LandingPage;
