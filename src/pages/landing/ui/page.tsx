import Hero from './hero';
import TutorialChatting from './tutorial-chatting/chatting';
import TutorialChattingDescription from './tutorial-chatting/description';

const LandingPage = () => {
  return (
    <Hero classNames={{ base: 'pt-14 md:pt-22' }}>
      <TutorialChattingDescription />
      <TutorialChatting />
    </Hero>
  );
};

export default LandingPage;
