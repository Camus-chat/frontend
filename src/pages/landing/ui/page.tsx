import { Hero } from '@/shared/ui';
import Header from '@/widgets/header';

import AnchorPoint from './anchor-point';
import SupportDescription from './support/description';
import SupportForm from './support/form';
import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const LandingPage = () => {
  return (
    <>
      <Header isFixed>
        <nav id='nav-menu' className='flex gap-8' />
      </Header>
      <main>
        <AnchorPoint label='소개' anchorPortalId='nav-menu' />
        <Hero
          className='bg-[url(/images/background-landing.svg)] bg-cover bg-center bg-no-repeat'
          isFirst
        >
          <TutorialChattingDescription />
          <TutorialChatting />
        </Hero>
        <AnchorPoint label='문의하기' anchorPortalId='nav-menu' />
        <Hero className='bg-[url(/images/background-support.svg)] bg-cover bg-center bg-no-repeat'>
          <SupportDescription />
          <SupportForm />
        </Hero>
      </main>
    </>
  );
};

export default LandingPage;
