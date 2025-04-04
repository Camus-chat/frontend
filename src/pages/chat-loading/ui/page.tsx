import SkeletonChattingListItem from '@/pages/chat-loading/ui/skeleton-chatting-list-item';
import ServiceContent from '@/widgets/service-content';

const ChattingLoadingPage = () => {
  return (
    <ServiceContent>
      <ServiceContent.MainItem title='채팅'>
        <SkeletonChattingListItem />
        <SkeletonChattingListItem />
        <SkeletonChattingListItem />
        <SkeletonChattingListItem />
      </ServiceContent.MainItem>
    </ServiceContent>
  );
};

export default ChattingLoadingPage;
