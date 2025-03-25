import { Button } from '@heroui/button';
import { CardHeader } from '@heroui/card';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

interface Props {
  title: string;
  channelType: string;
  userName: string;
  onClose?: () => void;
}

const ChatRoomHeader = ({ title, channelType, userName, onClose }: Props) => {
  return (
    <CardHeader className='item-center flex justify-between border-b-1 border-gray-100 px-2 py-2'>
      <div className='flex items-center justify-start'>
        <Button isIconOnly variant='light' onPress={onClose} className='mr-1'>
          <ArrowBackIosRoundedIcon />
        </Button>
        {channelType === 'private' && (
          <div className='mr-2 text-xl font-semibold'>{userName}</div>
        )}
        <div className='text-xl font-semibold'>{`#${title}`}</div>
      </div>
    </CardHeader>
  );
};

export default ChatRoomHeader;
