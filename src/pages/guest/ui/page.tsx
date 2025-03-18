import ServiceContent from '@/widgets/service-content';

const GuestChat: FC<{
  params: Promise<{
    link: string;
  }>;
}> = () => {
  return (
    <ServiceContent>
      <ServiceContent.MainItem>
        <h2 className='text-3xl font-semibold'>님과 대화를 시작합니다</h2>
      </ServiceContent.MainItem>
    </ServiceContent>
  );
};

export default GuestChat;
