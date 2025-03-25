import { CardHeader } from '@heroui/card';

interface Props {
  title: string;
}

const ChatRoomHeader = ({ title }: Props) => {
  return (
    <CardHeader className='item-center flex justify-between border-b-1 border-gray-100 pb-1 pt-2'>
      <div className='ml-2 text-xl font-semibold'>{`#${title}`}</div>
    </CardHeader>
  );
};

export default ChatRoomHeader;
