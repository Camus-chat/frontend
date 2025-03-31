import { ChattingFooter } from '@/widgets/chatting';
import ServiceContent from '@/widgets/service-content';

const GuestChattingPage = () => {
  return (
    <ServiceContent>
      <ServiceContent.ContentItem>
        <ChattingFooter />
      </ServiceContent.ContentItem>
    </ServiceContent>
  );
};

export default GuestChattingPage;
