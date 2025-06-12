import { Hero } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import Header from '@/widgets/header';

import AnchorPoint from './anchor-point';
import SupportDescription from './support/description';
import SupportForm from './support/form';
import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const LandingPage = () => {
  return (
    <>
      <Header position='sticky'>
        <nav id='nav-menu' className='flex gap-8 max-md:hidden' />
      </Header>
      <main>
        <AnchorPoint label='소개' anchorPortalId='nav-menu' />
        <Hero
          className='bg-[url(/images/background-landing.svg)] bg-cover bg-center bg-no-repeat'
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
      <Footer />
    </>
  );
};

export default LandingPage;
