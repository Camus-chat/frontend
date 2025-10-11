import { Hero } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import Header from '@/widgets/header';

import AnchorPoint from './anchor-point';
import SupportDescription from './support/description';
import SupportForm from './support/form';
import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const NAV_ID = 'nav-menu';

const LandingPage = () => {
  return (
    <>
      <Header position='fixed'>
        <nav id={NAV_ID} className='flex gap-8 max-md:hidden' />
      </Header>
      <main>
        <AnchorPoint label='소개' anchorPortalId={NAV_ID} />
        <Hero
          viewport={{ once: true }}
          className='mt-1 min-h-[min(100vh,1080px)] bg-[url(/images/background-landing.svg)] pt-14 md:pt-22'
          hasBackground
        >
          <TutorialChattingDescription />
          <TutorialChatting />
        </Hero>
        <AnchorPoint label='문의하기' anchorPortalId={NAV_ID} />
        <Hero
          className='bg-[url(/images/background-support.svg)]'
          hasBackground
        >
          <SupportDescription />
          <SupportForm />
        </Hero>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
