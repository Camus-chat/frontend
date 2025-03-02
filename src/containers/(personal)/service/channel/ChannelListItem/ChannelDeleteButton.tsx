import type { Channel } from '@/containers/(personal)/service/channel/type';
import { Button } from '@/shared/ui';

interface Props {
  channel: Channel;
}

const ChannelDeleteButton = ({ channel }: Props) => {
  const handleClick = () => {}; // 삭제 action 추가

  return (
    <Button
      size='sm'
      variant='flat'
      className='hover:text-red-500'
      onClick={handleClick}
    >
      삭제
    </Button>
  );
};

export default ChannelDeleteButton;
